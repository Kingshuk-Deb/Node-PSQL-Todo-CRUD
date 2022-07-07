import { object, string, number, TypeOf } from "zod";

export const userUpdateDetails = object({
body: 
    object({
        id: number(),
        name: string({ required_error: 'Please Mention Your Name!' }).optional(),
        email: string({ required_error: 'Please Mention Your Email!' }).email({ message: 'Invalid Email Format!' }).optional(),
    })
});

export type UserUpdateDetails = TypeOf<typeof userUpdateDetails>["body"];