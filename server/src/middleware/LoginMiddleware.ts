import {Request, Response, NextFunction } from "express";
import { AnyZodObject, z } from "zod";

export const dataSchema = z.object({
    body: z.object({
      email: z.string()
      .email("Not a valid email"),
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