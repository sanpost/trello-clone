"use client";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { useAction } from "@/hooks/use-action";
import { updateListOrder } from "@/actions/update-list-order";
import { updateCardOrder } from "@/actions/update-card-order";
import { toast } from "sonner";

interface ListContainerProps {
    data: ListWithCards[];
    boardId: string;
};

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


export const ListContainer = ({
    data,
    boardId,
}: ListContainerProps) => {

    const [orderedData, setOrderedData] = useState(data);

    const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
        onSuccess: () => {
            toast.success("List reorded.");
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
        onSuccess: () => {
            toast.success("Card reorded.");
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    useEffect(() => {
        setOrderedData(data);
    }, [data]);

    const onDragEnd = (result: any) => {
        const { destination, source, type } = result;

        if (!destination) {
            return;
        };

        // if dropped in the same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        };

        // user moves a list
        if (type === "list") {
            const items = reorder(
                orderedData,
                source.index,
                destination.index
            ).map((item, index) => ({ ...item, order: index }));

            setOrderedData(items);

            executeUpdateListOrder({ items, boardId });
        };

        // user moves a card
        if (type === "card") {
            let newOrderData = [...orderedData];

            // source and destination list
            const sourceList = newOrderData.find(list => list.id === source.droppableId);
            const destList = newOrderData.find(list => list.id === destination.droppableId);

            if (!sourceList || !destList) {
                return;
            };

            // check if card exists on the sourceList
            if (!sourceList.cards) {
                sourceList.cards = [];
            }

            // check if card exists on the destList
            if (!destList.cards) {
                destList.cards = [];
            }

            // moving the card ub the same list 
            if (source.droppableId === destination.droppableId) {
                const reorderedCards = reorder(
                    sourceList.cards,
                    source.index,
                    destination.index
                );

                reorderedCards.forEach((card, idx) => {
                    card.order = idx;
                });

                sourceList.cards = reorderedCards;

                setOrderedData(newOrderData);
                executeUpdateCardOrder({
                    items: reorderedCards,
                    boardId: boardId,
                });

                // user moves the card to another list
            } else {
                // remove card from source list
                const [movedCard] = sourceList.cards.splice(source.index, 1);

                // assign the new listId to the moved card
                movedCard.listId = destination.droppableId;

                // add card to the destination list
                destList.cards.splice(destination.index, 0, movedCard);

                // update the order of the cards
                sourceList.cards.forEach((card, idx) => {
                    card.order = idx;
                });

                // update the order for each card in the destination list
                destList.cards.forEach((card, idx) => {
                    card.order = idx;
                });

                setOrderedData(newOrderData);
                executeUpdateCardOrder({
                    items: destList.cards,
                    boardId: boardId,
                });


            }
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="lists" type="list" direction="horizontal">
                {(provided) => (
                    <ol
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex gap-x-3 h-full"
                    >
                        {orderedData.map((list, index) => {
                            return (
                                <ListItem
                                    key={list.id}
                                    index={index}
                                    data={list}
                                />
                            )
                        })}

                        {provided.placeholder}
                        <ListForm />
                        <div className="flex-shrink-0 w-1" />
                    </ol>
                )}
            </Droppable>
        </DragDropContext>
    );
};