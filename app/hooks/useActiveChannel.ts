import { useState, useEffect } from "react";
import { Channel, Members } from "pusher-js";
import { pusherClient } from "../libs/pusher";
import useActiveList from "./useActiveList";

interface Member {
    id: string;  // All members will at least have an ID
}

const useActiveChannel = () => {
    const { set, add, remove } = useActiveList();
    const [activeChannel, setActiveChannel] = useState<Channel | null>(null);

    useEffect(() => {
        let channel = activeChannel;

        if (!channel) {
            channel = pusherClient.subscribe('presence-messenger');
            setActiveChannel(channel);
        }

        const handleSubscriptionSucceeded = (members: Members) => {
            const initialMembers: string[] = [];
            members.each((member: Member) => initialMembers.push(member.id));
            set(initialMembers);
        };

        channel.bind('pusher:subscription_succeeded', handleSubscriptionSucceeded);

        channel.bind("pusher:member_added", (member: Member) => {
            add(member.id);
        });

        channel.bind("pusher:member_removed", (member: Member) => {
            remove(member.id);
        });

        return () => {
            if (activeChannel) {
                activeChannel.unbind('pusher:subscription_succeeded', handleSubscriptionSucceeded);
                activeChannel.unbind("pusher:member_added");
                activeChannel.unbind("pusher:member_removed");
                pusherClient.unsubscribe('presence-messenger');
                setActiveChannel(null);
            }
        };
    }, [activeChannel, set, add, remove]);  // Ensure dependencies are correctly listed

    return activeChannel;
};

export default useActiveChannel;
