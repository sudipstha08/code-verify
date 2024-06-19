import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

export const Validate =
  (schema: z.AnyZodObject) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })

      return next()
    } catch (error) {
      return next({
        message: 'Client request validation error',
        error,
      })
    }
  }
