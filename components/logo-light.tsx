import Link from "next/link"
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const textFont = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const LogoLight = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src="/logo-light.svg" alt='logo' height={30} width={30} />
                <p className={cn("text-lg text-neutral-100", textFont.className)}>TrelloClone</p>
            </div>
        </Link>
    )
}