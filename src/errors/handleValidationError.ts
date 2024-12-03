import { Prisma } from '@prisma/client';
import { IGenericErrorResponse } from '../interfaces/common';

/**
 * Handles Prisma validation errors and formats them into a standardized error response
 * @param error - The Prisma validation error to handle
 * @returns A formatted error response object
 */
const handleValidationError = (
  error: Prisma.PrismaClientValidationError
): IGenericErrorResponse => {
  // Create array with single error object containing the validation message
  const errors = [
    {
      path: '', // Empty path since this is a general validation error
      message: error.message,
    },
  ];

  // Use 400 Bad Request status code for validation errors
  const statusCode = 400;

  // Return formatted error response
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
