import { string, z } from "zod";

export const DeleteBoard = z.object({
    id: string(),
});