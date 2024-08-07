
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";

interface PremiumFeaturesProps {
    isPro: boolean;
}

export const PremiumFeatures = async ({
    isPro,
}: PremiumFeaturesProps) => {

    const benefits = [
        "Unlimited boards",
        "More backgrounds",
        "Priority support",
        "Increased storage",
        "And more..."
    ];

    return (
        <div className="flex flex-row items-center text-slate-50">
            <div className="flex-shrink-0 w-2/3 hidden md:block">
            <div className="aspect-video relative flex items-center justify-center">
                    <Image
                        src="/billings.svg"
                        alt="Billings"
                        fill />
                </div>
            </div>
            <div className="flex-grow ml-2 p-2 mr-3 md:text-sm">
                <h1 className="text-lg font-semibold mb-4 text-center">
                    {isPro ? "Have fun to use!" : " Unlock more features!"}
                </h1>
                <h2 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-l from-sky-700 to-purple-700 p-2 rounded-xl">
                    Premium
                </h2>
                <ul className="list-disc pl-5">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex flex-row items-center">
                            <BadgeCheckIcon className="mr-2" />
                            {benefit}
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};