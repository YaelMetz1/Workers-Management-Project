import express from "express";
import * as userController from "../controllers/UserController";

const userRoutes = express.Router();

userRoutes.post("/verification", userController.verification);
userRoutes.post("/register", userController.register);

export default userRoutes;
