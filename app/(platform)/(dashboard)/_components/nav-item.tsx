"use client";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};

interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: any;
    onExpand: (id: string) => void;
}

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const routes = [
        {
            label: "Boards",
            icon: <Layout className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}`,
        },
        {
            label: "Activity",
            icon: <Activity className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/activity`,
        },
        {
            label: "Settings",
            icon: <Settings className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/settings`,
        },
        {
            label: "Billing",
            icon: <CreditCard className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/billing`,
        }
    ]

    const onClick = (href: string) => {
        router.push(href);
    }

    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn(
                    "flext items-center gap-x-2 p-1.5 bg-slate-100 text-neutral-800 rounded-3xl hover:bg-purple-200 transition-all duration-1000 text-start np-underline hover:no-underline",
                    isActive && !isExpanded && "bg-purple-200 text-neutral-800",
                    isExpanded && "rounded-b-none rounded-t-3xl transition"
                )}>
                <div className="flex items-center gap-x-4 rounded-none">
                    <div className="w-7 h-7 relative">
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt="Organization"
                            className="rounded-full object-cover"
                        />
                    </div>
                    <span className="font-medium text-sm">
                        {organization.name}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-1.5 text-neutral-800 bg-slate-100 rounded-b-3xl">
                {routes.map((route) => (
                    <Button
                        key={route.href}
                        size="sm"
                        onClick={() => onClick(route.href)}
                        className={cn(
                            "w-full font-normal justify-start pl-10 mb-1 rounded-t-sm",
                            pathname === route.href && "text-purple-700"

                        )}
                        variant="purple"
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

NavItem.Skeleton = function SkeletonNavItem() {
    return (
        <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-10 w-full rounded-full" />
        </div>
    );
}