import { object, string, TypeOf, array, number } from "zod";

export const todoDetailsInput = object({
body: 
    object({
        id: number().optional(),
        title: string({ required_error: 'Please Provide Task Title!' }),
        description: string({ required_error: 'Please Provide Task Description!' }),
        dueDate: string({ required_error: 'Please Provide Task Due Date!' }),
        userId: number({ required_error: 'Please Provide UserID!' })
    })
});

export const todoDetails = array(todoDetailsInput)

export type TodoDetailsInput = TypeOf<typeof todoDetailsInput>["body"];

export type TodoDetails = TypeOf<typeof todoDetails>;