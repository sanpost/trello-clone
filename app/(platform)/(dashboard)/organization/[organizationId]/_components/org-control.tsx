'use client';

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
    const params = useParams();
    const {setActive } = useOrganizationList();

    useEffect(() => {
        if(!setActive) return;

        setActive({
            organization: params.organizationId as string,
        });
    }, [setActive, params.organizationId]);
    
    return null;
};

// This file is a component that sets the active organization in the organization list when the component is mounted.