import {AnyZodObject} from 'zod';
import { Request, Response, NextFunction } from 'express';

export const Validation = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const validatedData =  schema.safeParse(data);
  if(!validatedData.success) {
    return res.json({ error: validatedData.error}).status(400);
  }
  return next()
}
