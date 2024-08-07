import { currentUser } from "@clerk/nextjs/server";
import { Stars } from "lucide-react";

export const WelcomeUser = async () => {

    const user = await currentUser();

    return (
        <div className="w-full flex items-center flex-col">
            <div className="w-2/3 flex justify-between items-center text-base md:text-2xl font-base bg-gradient-to-tl from-sky-500/80 to-sky-700/80 p-3 rounded-full text-white">
                <Stars className="w-10 h-10 mt-[-50px]" />
                <div className="flex flex-col md:flex-row items-center">
                    <p>Welcome</p>
                    <p className="px-1 font-semibold">{user?.firstName}</p>
                </div>
                <Stars className="w-10 h-10 mb-[-50px] " />
            </div>
        </div>
    )
}