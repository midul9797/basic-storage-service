import { z } from 'zod';

// Validation schema for creating a new document metadata record
const create = z.object({
  body: z.object({
    title: z.string(), // Document title
    version: z.number(), // Document version number
    bookingId: z.string(), // Associated booking ID
  }),
});

// Validation schema for updating an existing document metadata record
const update = z.object({
  body: z.object({
    title: z.string(), // Document version number
  }),
});

// Export validation schemas
export const DocumentMetadataValidation = {
  update,
  create,
};
