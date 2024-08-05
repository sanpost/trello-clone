import { Card } from "@prisma/client";
import { z } from "zod";
import { DeleteCard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof DeleteCard>;
export type ReturnType = ActionState<InputType, Card>;