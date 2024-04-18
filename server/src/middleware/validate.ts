import { z, AnyZodObject, ZodError} from 'zod';
import express, { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes';

export const Validation = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      return next()
    } catch (error) {
      if (error instanceof ZodError) {
      const errorMessages = error.errors.map((issue: any) => ({
        message: issue.message,
        }))
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data', details: errorMessages });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error dur to' });
      }
    }
}