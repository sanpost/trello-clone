import {z} from "zod";

// Define the schema for creating a board
export const CreateBoard = z.object({
    // Specify the title field as a string
    title: z.string({
        // Error message to display if the title is missing
        required_error: "Title is required",
        // Error message to display if the title is not a string
        invalid_type_error: "Title is required",
    }).min(3, {
        // Error message to display if the title is too short
        message: "Title is too short",
    }),
    image: z.string({
        required_error: "Image is required",
        invalid_type_error: "Image is required",
    })
})
