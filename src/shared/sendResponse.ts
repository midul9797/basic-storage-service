import { Response } from 'express';

/**
 * Interface for standardized API response format
 * @template T - Type of data being returned
 */
type IApiReponse<T> = {
  statusCode: number; // HTTP status code
  success: boolean; // Whether the request was successful
  message?: string | null; // Optional message describing the response
  meta?: {
    page: number; // Current page number for paginated responses
    limit: number; // Items per page
    total: number; // Total number of items
  };
  data?: T | null; // The actual response data
};

/**
 * Sends a standardized JSON response
 * @template T - Type of data being returned
 * @param res - Express Response object
 * @param data - Response data conforming to IApiResponse interface
 */
const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  // Construct response object with fallbacks for optional fields
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  // Send JSON response with appropriate status code
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
