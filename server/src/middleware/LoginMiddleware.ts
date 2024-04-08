import {Request, Response, NextFunction } from "express";
import { AnyZodObject, z } from "zod";

export const dataSchema = z.object({
    body: z.object({
      email: z.string()
      .min(1, "Email is required and cannot be empty")
      .email("Not a valid email"),
      password: z.string()
      .min(1, "Password is required and cannot be empty"),
    }),
  });

  export const validate = (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error: any) {
        res.status(400).json({error: error});
    }
};