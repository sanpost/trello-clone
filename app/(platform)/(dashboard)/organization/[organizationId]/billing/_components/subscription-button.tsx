"use client";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro,
}: SubscriptionButtonProps) => {

    const proModal = useProModal();

    const { execute, isLoading } = useAction(stripeRedirect, {
        onSuccess: (data) => {
            window.location.href = data;
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const onClick = () => {
        if (isPro) {
            execute({});
        } else {
            proModal.onOpen();
        }
    }

    return (
        <div className="w-full flex flex-row items-center gap-x-3 text-xs mr-0">
            <div className="text-slate-50 flex flex-row gap-x-2 items-center">
            <div className="hidden md:flex md:items-center">
                    <p>Check here!</p>
                    <ArrowRight className="w-5 h-5 ml-2" />
                </div>
            </div>
            <Button
                variant='primary'
                className="rounded-full"
                disabled={isLoading}
                onClick={onClick}
            >
                {isPro ? "Manage subscription" : "Upgrade to Pro"}
            </Button>
        </div>
    );
}