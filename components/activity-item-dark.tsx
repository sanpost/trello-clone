import { AuditLog } from "@prisma/client";
import { generateLogMessage } from "@/lib/generate-log-message";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { ChevronDownCircleIcon } from "lucide-react";

interface ActivityItemDarkProps {
    data: AuditLog;
}

export const ActivityItemDark = ({
    data,
}: ActivityItemDarkProps) => {
    
    return (
        <li className="flex items-center gap-x-2 ">
            <Avatar className="h-8 w-8">
                <AvatarImage src={data.userImage} />
            </Avatar>
            <div className="flex flex-col space-y-0.5">
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold lowercase text-neutral-700">
                        {data.userName}
                    </span> {generateLogMessage(data)}
                </p>

            </div>
            <div className="flex items-end flex-row ml-auto">
                <p className="space-y-4 text-xs text-neutral-700"  >
                    {format(new Date(data.createdAt), "MMM dd, yyyy 'at' hh:mm a")}
                </p>
                <ChevronDownCircleIcon className="w-4 h-4 text-neutral-200/70 ml-2" />
            </div>

        </li>
    );
};