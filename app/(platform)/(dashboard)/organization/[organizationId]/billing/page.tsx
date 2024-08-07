import { checkSubscription } from "@/lib/subscription";
import Info from "../_components/info";
import { SubscriptionButton } from "./_components/subscription-button";
import { PremiumFeatures } from "./_components/premium-features";
import { WelcomeUser } from "./_components/welcome-user";

const BillingPage = async () => {

    const isPro = await checkSubscription();

    return (
        <div className="w-full h-full flex flex-col justify-between md:p-10 p-5">
            <WelcomeUser />
            <PremiumFeatures
                isPro={isPro} />
            <div className="flex flex-col md:flex-row justify-between items-center ">
                <Info isPro={isPro} />
                <div className="md:ml-auto ml-0 mt-5">
                    <SubscriptionButton
                        isPro={isPro}
                    />
                </div>
            </div>
        </div>
    );
};

export default BillingPage;