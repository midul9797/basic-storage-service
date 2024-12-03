import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 * Higher-order function that wraps an Express request handler to provide error handling
 * @param fn - The Express request handler function to wrap
 * @returns An async function that executes the handler and catches any errors
 */
const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Execute the request handler and await its completion
      await fn(req, res, next);
    } catch (error) {
      // Pass any caught errors to Express error handling middleware
      next(error);
    }
  };

export default catchAsync;
