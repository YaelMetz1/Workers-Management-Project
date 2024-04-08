import express from "express";
import * as userController from "../controllers/UserController";
import {dataSchema, validate} from "../middleware/LoginMiddleware"

const userRoutes = express.Router();

userRoutes.post("/verification", validate(dataSchema), userController.verification);
userRoutes.post("/register", userController.register);

export default userRoutes;
