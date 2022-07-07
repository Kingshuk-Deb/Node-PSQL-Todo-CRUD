import { object, string, TypeOf, array, number } from "zod";

export const todoUpdateDetailsInput = object({
body: 
    object({
        id: number(),
        title: string({ required_error: 'Please Provide Task Title!' }).optional(),
        description: string({ required_error: 'Please Provide Task Description!' }).optional(),
        dueDate: string({ required_error: 'Please Provide Task Due Date!' }).optional(),
    })
});

export const todoDetails = array(todoUpdateDetailsInput)

export type TodoUpdateDetailsInput = TypeOf<typeof todoUpdateDetailsInput>["body"];

export type TodoDetails = TypeOf<typeof todoDetails>;