import { object, string, number, TypeOf } from "zod";
import { todoDetails } from "./todo.schema";

export const userDetails = object({
body: 
    object({
        id: number().optional(),
        name: string({ required_error: 'Please Mention Your Name!' }),
        email: string({ required_error: 'Please Mention Your Email!' }).email({ message: 'Invalid Email Format!' }),
        password: string({ required_error: 'Please Provide Your Password!' }),
        todos: todoDetails.optional()
    })
});

export type UserDetails = TypeOf<typeof userDetails>["body"];