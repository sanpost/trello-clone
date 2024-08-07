import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";

const textFont = Poppins ({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
    return (
        <div className={cn("flex items-center justify-center flex-col", textFont.className)}>
            <div className="h-full flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center shadow-sm p-4 bg-indigo-100 text-indigo-700 rounded-full uppercase border-none">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 task management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-200 mb-6">
                    TrelloClone - your work, your way
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-100 to-purple-200 text-indigo-900 px-4 p-2 rounded-md pb-4 w-fit ">
                    Work forward.
                </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-100 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
                Collaborate  manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with TrelloClone.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                    Get TrelloClone for free
                </Link>
            </Button>
        </div>
    );
};

export default MarketingPage;