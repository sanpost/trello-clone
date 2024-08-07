"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, Organization } from "./nav-item";


interface SidebarProps {
    storageKey?: string;
}

export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {

    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey,
        {}
    );

    const { organization: activeOrganization,
        isLoaded: idLoadedOrg
    } = useOrganization();

    const {
        userMemberships,
        isLoaded: isLoadedOrgList
    } = useOrganizationList({
        userMemberships:
            { infinite: true },
    });

    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key);
            }
            return acc;
        }, []);

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }));
    };

    if (!idLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-10 w-full rounded-full" />
                </div>
                <div className="space-y-2">
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>

            </>
        );
    }

    return (
        <>
            <div className="font-medium text-xs flex items-center mb-2 bg-slate-100 w-full rounded-full">
                <span className="pl-4 font-semibold">
                    Workspaces
                </span>
                <Link 
                href="/select-org"
                className="ml-auto">
                    <Button
                        type="button"
                        size="icon"
                        variant="purple"
                        className="ml-auto rounded-full"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                {userMemberships.data.map(({ organization }) => (
                    <NavItem
                        key={organization.id}
                        isActive={activeOrganization?.id === organization.id}
                        isExpanded={expanded[organization.id]}
                        organization={organization as Organization}
                        onExpand={onExpand}
                    />
                ))}
            </Accordion>
        </>
    );
}