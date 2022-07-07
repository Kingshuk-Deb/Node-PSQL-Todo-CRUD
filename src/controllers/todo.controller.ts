import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { TodoDetailsInput } from "../schemas/todo.schema";
import { TodoUpdateDetailsInput } from "../schemas/todo.update.schema";

const prisma = new PrismaClient()

const CreateTodoData = async (req: Request<{}, {}, TodoDetailsInput>, res: Response) => {
    try {
        const todo: any = await prisma.todo.create({
            data: req.body
        });
        res.json({
            success: true,
            todo
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const GetTodoData = async (req: Request<{}, {}, Partial<TodoUpdateDetailsInput> >, res: Response) => {
    try {
        const todo: any = await prisma.todo.findUnique({
            where: {
                id: req.body.id
            }
        });
        res.json({
            success: true,
            todo
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const UpdateTodoData = async (req: Request, res: Response) => {
    try {
        const todo: any = await prisma.todo.update({
            where: {
                id: req.body.id
            },
            data: req.body
        });
        res.json({
            success: true,
            todo
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

const DeleteTodoData = async (req: Request, res: Response) => {
    try {
        const todo: any = await prisma.todo.delete({
            where: {
                id: req.body.id
            }
        });
        res.json({
            success: true,
            todo
        })
    } catch(e) {
        console.log(e);
        res.json({
            success: false
        }); 
    }
}

export = { CreateTodoData, GetTodoData, UpdateTodoData, DeleteTodoData };
