import Info from "./_components/info";
import { BoardList } from "./_components/board-list";
import { Suspense } from "react";
import { checkSubscription } from "@/lib/subscription";


const OrganizationIdPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div className="w-full">
            <div className="ml-10 mt-10">
                <Info isPro={isPro} />
            </div>
            <div className="px-2 md:px-4 mt-5">
                <Suspense fallback={<BoardList.Skeleton />}>
                    <BoardList />
                </Suspense>
            </div>
        </div>
    )
}

export default OrganizationIdPage;