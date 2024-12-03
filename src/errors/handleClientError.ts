import { Prisma } from '@prisma/client';
import { IGenericErrorMessage } from '../interfaces/error';

/**
 * Handles Prisma client known request errors and formats them into a standardized error response
 * @param error - The Prisma client known request error to handle
 * @returns Object containing status code, message and error details
 */
const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = '';
  const statusCode = 400; // Bad Request status code

  // Handle record not found error
  if (error.code === 'P2025') {
    message = (error.meta?.cause as string) || 'Record not found';
    errors = [{ path: '', message }];
  }
  // Handle foreign key constraint error
  else if (error.code === 'P2003') {
    // Specific handling for deletion failures
    if (error.message.includes('delete()` invocation:')) {
      message = 'Deletion Failed';
      errors = [{ path: '', message }];
    }
  }

  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleClientError;
