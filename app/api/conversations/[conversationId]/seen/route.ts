import getCurrentUser from "@/app/actions/getCurrentUser";
import { pusherServer } from "@/app/libs/pusher";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"; // Ensure prisma is imported

export async function POST(
    request: Request,
    context: { params: Promise<{ conversationId: string }> }
) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id || !currentUser?.email) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const conversation = await prisma.conversation.findUnique({
            where: {
                id: (await context.params).conversationId
            },
            include: {
                messages: {
                    include: {
                        seen: true,
                    }
                },
                users: true,
            }
        });

        if (!conversation) return new NextResponse("Invalid ID", { status: 400 });

        const lastMessage = conversation.messages[conversation.messages.length - 1];

        if (!lastMessage) return NextResponse.json(conversation);

        const updatedMessage = await prisma.message.update({
            where: {
                id: lastMessage.id
            },
            include: {
                sender: true,
                seen: true
            },
            data: {
                seen: {
                    connect: {
                        id: currentUser.id,
                    }
                }
            }
        });

        await pusherServer.trigger(currentUser.email, 'conversation:update', {
            id: (await context.params).conversationId,
            messages: [updatedMessage]
        });

        if (lastMessage.seenIds.includes(currentUser.id)) {
            return NextResponse.json(conversation);
        }

        await pusherServer.trigger((await context.params).conversationId, 'message:update', updatedMessage);

        return NextResponse.json(updatedMessage);
    } catch (error) {
        console.error("Error updating message:", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
