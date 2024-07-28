"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "primary" | "secondary" | "default" | "destructive" | "outline" | "link" | "ghost";

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