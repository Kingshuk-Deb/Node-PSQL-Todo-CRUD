import Todo from "../controllers/todo.controller";
import { Router } from "express";
import validateRequest from "../middlewares/validateType.middleware";
import { todoDetailsInput } from "../schemas/todo.schema";
import { todoUpdateDetailsInput } from "../schemas/todo.update.schema";

const router = Router();
router.post('/', validateRequest(todoDetailsInput), Todo.CreateTodoData);
router.get('/', validateRequest(todoUpdateDetailsInput), Todo.GetTodoData);
router.patch('/', validateRequest(todoUpdateDetailsInput), Todo.UpdateTodoData);
router.delete('/', validateRequest(todoUpdateDetailsInput), Todo.DeleteTodoData);

export = router;