"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";
import { fetcher } from "@/lib/fetcher";
import { CardWithList } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./header";
import { Description } from "./description";
import { Actions } from "./actions";
import { AuditLog } from "@prisma/client";
import { ActivityDark } from "./activity-dark";

export const CardModal = () => {
    const id = useCardModal((state) => state.id);
    const isOpen = useCardModal((state) => state.isOpen);
    const onClose = useCardModal((state) => state.onClose);

    const { data: cardData } = useQuery<CardWithList>({
        queryKey: ["card", id],
        queryFn: () => fetcher(`/api/cards/${id}`),
    });

    const { data: auditLogsData } = useQuery<AuditLog[]>({
        queryKey: ["card-logs", id],
        queryFn: () => fetcher(`/api/cards/${id}/logs`),
    });

    return (
        <Dialog 
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent>
                {!cardData
                    ? <Header.Skeleton />
                    : <Header data={cardData} />
                }
                <div className="grid grid-col-1 md:grid-cols-4 mg:gap-4">
                    <div className="col-span-3">
                        <div className="w-full space-y-6">
                            {!cardData
                                ? <Description.Skeleton />
                                : <Description data={cardData} />
                            }
                            {!auditLogsData
                                ? <ActivityDark.Skeleton />
                                : <ActivityDark items={auditLogsData} />
                            }
                        </div>
                    </div>
                    {!cardData
                        ? <Actions.Skeleton />
                        : <Actions data={cardData} />
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};