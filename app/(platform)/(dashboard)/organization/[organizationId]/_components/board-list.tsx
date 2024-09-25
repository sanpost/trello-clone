import { FormPopover } from "@/components/form/form-popover";
import Hint from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { getAvailableCount } from "@/lib/org-limit";
import { MAX_FREE_BOARDS } from "@/constans/boards";
import { checkSubscription } from "@/lib/subscription";
import { format } from "date-fns";

export const BoardList = async () => {

    const { orgId } = auth();

    if (!orgId) {
        return redirect("/select-org")
    }

    const board = await db.board.findMany({
        where: {
            orgId,
        },
        orderBy: {
            createdAt: "desc",
        }
    });

    const availableCount = await getAvailableCount();
    const isPro = await checkSubscription();

    return (
        <div className="space-y-4 mb-4 p-2">
            <div className="flex items-center font-semibold text-lg text-slate-100">
                <User2 className="h-6 w-6 mr-2" />
                Your Boards
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <FormPopover sideOffset={10} side="right">
                    <div className="flex flex-col">
                        <p className="relative text-slate-50/70 text-xs pb-1">
                            {format(new Date(), "MMM dd, yyyy")}
                        </p>
                        <div
                            role="button"
                            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75">
                            <p className="text-sm"> Create new Board </p>
                            <span className="text-xs">
                                {isPro ? "Unlimited" : `${MAX_FREE_BOARDS - availableCount} remaining`}
                            </span>
                            <Hint
                                sideOffset={40}
                                description={
                                    `Free Workspace can have up to 5 boards. 
                                For unlimited boards, upgrade to a paid plan.`
                                }>
                                <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px] text-muted-foreground" />
                            </Hint>
                        </div>
                    </div>
                </FormPopover>
                {board.map((board) => (
                    <div key={board.id} className="flex items-start flex-col">
                        <p className="relative text-slate-50/70 text-xs pb-1">
                            {format(new Date(board.createdAt), "MMM dd, yyyy")}
                        </p>
                        <Link
                            key={board.id}
                            href={`/board/${board.id}`}
                            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden shadow-black-50/10 shadow-lg"
                            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
                        >
                            <div className="absolute inset-0 bg-black/30  group-hover:bg-black/40 transition" />
                            <p className="relative font-semibold text-white">
                                {board.title}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

BoardList.Skeleton = function SkeletonBoardList() {
    return (
        <div className="space-y-4">
            <div className="flex items-center font-semibold text-lg text-neutral-700">
                <User2 className="h-6 w-6 mr-2" />
                Your Boards
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
                <Skeleton className="aspect-video h-full w-full p-2" />
            </div>
        </div>
    );
};
