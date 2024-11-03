import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined; // This remains `var` because of its use in global declaration
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = client; // No reassignment issue here
}

export default client;
