import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

/**
 * Handles Zod validation errors and formats them into a standardized error response
 * @param error - The Zod validation error to handle
 * @returns A formatted error response object with status code, message and error details
 */
const handleZodError = (error: ZodError): IGenericErrorResponse => {
  // Map each Zod issue to our generic error message format
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      // Get the last element of the path array as the field name
      path: issue?.path[issue.path.length - 1],
      // Use the Zod error message
      message: issue?.message,
    };
  });

  // Use 400 Bad Request status code for validation errors
  const statusCode = 400;

  // Return formatted error response
  return {
    statusCode,
    message: 'Error',
    errorMessages: errors,
  };
};

export default handleZodError;
