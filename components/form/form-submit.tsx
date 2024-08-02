"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "ghost";
};

export const FormSubmit = ({
    children,
    disabled,
    className,
    variant,
}: FormSubmitProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={disabled || pending}
            type="submit"
            variant={variant}
            size="sm"
            className={cn(className)} >
            {children}
        </Button>
    )

}