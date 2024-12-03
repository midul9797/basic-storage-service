import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

/**
 * Middleware to validate request data against a Zod schema
 * @param schema Zod schema to validate against
 * @returns Express middleware function
 */
const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Validate request data (body, query, params, cookies) against the schema
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      // Pass validation errors to error handling middleware
      next(error);
    }
  };

export default validateRequest;
