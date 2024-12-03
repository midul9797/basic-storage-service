import { IGenericErrorMessage } from './error';

/**
 * Generic response interface for paginated data
 * @template T - Type of the data being returned
 */
export type IGenericResponse<T> = {
  meta: {
    page: number; // Current page number
    limit: number; // Items per page
    total: number; // Total number of items
    totalPage: number; // Total number of pages
  };
  data: T; // The actual data being returned
};

/**
 * Standard error response interface used across the application
 */
export type IGenericErrorResponse = {
  statusCode: number; // HTTP status code
  message: string; // Error message
  errorMessages: IGenericErrorMessage[]; // Detailed error messages
};

/**
 * Interface for Clerk authentication token payload
 */
export type ClerkTokenPayload = {
  azp: string; // Authorized party
  clerkId: string; // Unique Clerk user ID
  email: string; // User's email
  exp: number; // Token expiration timestamp
  fva: [number, number]; // Feature version array
  iat: number; // Token issued at timestamp
  iss: string; // Token issuer
  jti: string; // JWT ID
  name: string; // User's name
  nbf: number; // Not before timestamp
  sid: string; // Session ID
  sub: string; // Subject (user identifier)
};
