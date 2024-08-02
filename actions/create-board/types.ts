import { z } from "zod"; 
import { Board } from "@prisma/client"; 
import { ActionState } from "@/lib/create-safe-action"; 
import { CreateBoard } from "./schema"; 

export type InputType = z.infer<typeof CreateBoard>; // Defining a type alias 'InputType' which is inferred from the 'CreateBoard' type
export type ReturnType = ActionState<InputType, Board> // Defining a type alias 'ReturnType' which is a generic type 'ActionState' with 'InputType' and 'Board' as type arguments
