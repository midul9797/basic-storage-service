/**
 * Custom API Error class that extends the base Error class
 * Adds HTTP status code handling and improved stack trace capture
 */
class ApiError extends Error {
  // HTTP status code for the error
  statusCode: number;

  /**
   * Creates a new ApiError instance
   * @param statusCode - HTTP status code for the error
   * @param message - Error message
   * @param stack - Optional stack trace string
   */
  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message);
    this.statusCode = statusCode;

    // Use provided stack trace if available, otherwise capture it
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
