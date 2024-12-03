/**
 * Interface for standardized error messages across the application
 */
export type IGenericErrorMessage = {
  path: string | number; // Field path or index where the error occurred
  message: string; // Human-readable error message
};
