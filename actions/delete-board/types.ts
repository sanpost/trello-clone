import { Board } from "@prisma/client";
import { z } from "zod";
import { DeleteBoard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";


export type InputType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;