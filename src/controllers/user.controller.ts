import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { UserDetails } from "../schemas/user.schema";
import { UserUpdateDetails } from "../schemas/user.update.schema";
const argon2 = require('argon2');

const prisma = new PrismaClient()

const CreateUserData = async (req: Request<{}, {}, UserDetails>, res: Response) => {
    try {
        req.body.password = await argon2.hash(req.body.password);
        const user: Partial<UserDetails> = await prisma.user.create({
            data: req.body
        });
        delete user.password
        res.json({
            success: true,
            user
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const GetUserData = async (req: Request<{}, {}, UserUpdateDetails>, res: Response) => {
    try {
        const user: any = await prisma.user.findUnique({
            where: {
                id: req.body.id
            },
            include: {
                todos: true
            },
        });
        delete user.password
        res.json({
            success: true,
            user
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const UpdateUserData = async (req: Request<{}, {}, UserUpdateDetails>, res: Response) => {
    try {
        const user: any = await prisma.user.update({
            where: {
                id: req.body.id
            },
            data: req.body,
            include: {
                todos: true
            },
        });
        delete user.password
        res.json({
            success: true,
            user
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const DeleteUserData = async (req: Request<{}, {}, UserUpdateDetails>, res: Response) => {
    try {
        await prisma.todo.deleteMany({
            where: {
                userId: {
                    equals: req.body.id
                }
            }
        });
        const user: any = await prisma.user.delete({
            where: {
                id: req.body.id
            }
        });
        delete user.password
        res.json({
            success: true,
            user
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

export = { CreateUserData, GetUserData, UpdateUserData, DeleteUserData };
