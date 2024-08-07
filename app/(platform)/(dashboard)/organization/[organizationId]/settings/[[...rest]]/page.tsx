import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="w-full h-full bg-slate-50 rounded-sm">
            <OrganizationProfile
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: "none",
                            width: "100%",
                            height: "100%",
                        },
                        cardBox: {
                            boxShadow: "none",
                            width: "100%",
                        }
                    },
                }}
            />
        </div>
    );
};

SettingsPage.Skeleton = function SkeletonSettingsPage() {
    return (
        <div className="w-full md:h-[700px] bg-slate-50 rounded-sm animate-pulse">
            <Skeleton className="w-full h-full bg-slate-50 rounded-sm" />
        </div>
    );
}
export default SettingsPage;