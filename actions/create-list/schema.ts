import { string, z } from "zod";

export const CreateList = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title id required",
    }).min(3, {
        message: "Title must be at least 3 characters",
    }),
    boardId: string(),
});