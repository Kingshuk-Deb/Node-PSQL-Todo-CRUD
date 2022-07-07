import User from "../controllers/user.controller";
import { Router } from "express";
import validateRequest from "../middlewares/validateType.middleware";
import { userDetails } from "../schemas/user.schema";
import { userUpdateDetails } from "../schemas/user.update.schema";

const router = Router();
router.post('/', validateRequest(userDetails), User.CreateUserData);
router.get('/', validateRequest(userUpdateDetails), User.GetUserData);
router.patch('/', validateRequest(userUpdateDetails), User.UpdateUserData);
router.delete('/', validateRequest(userUpdateDetails), User.DeleteUserData);

export = router;