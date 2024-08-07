
import { Separator } from "@/components/ui/separator";
import Info from "../_components/info";
import { ActivityList } from "../_components/activity-list";
import { Suspense } from "react";
import { checkSubscription } from "@/lib/subscription";

const ActivityPage = async () => {
    
    const isPro = await checkSubscription();
    
    return (
        <div className="w-full space-y-8 md:p-10 p-5"> 
            <Info isPro={isPro}/>
            <Suspense fallback={<ActivityList.Skeleton />}>
                <ActivityList />
            </Suspense>
        </div>
    );
};

export default ActivityPage;