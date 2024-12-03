import { z } from 'zod';

// Validation schema for creating a new booking record
const create = z.object({
  body: z.object({
    // Required fields
    title: z.string(),
    bookingDate: z.string(),

    // Optional fields
    description: z.string().optional(),
    userId: z.string().optional(), // ID of user creating the booking
  }),
});

// Validation schema for updating an existing booking record
const update = z.object({
  body: z.object({
    // Optional fields that can be updated
    title: z.string().optional(),
    description: z.string().optional(),

    // Required fields even in update
    bookingDate: z.string(),
  }),
});

// Export validation schemas
export const BookingRecordValidation = {
  update,
  create,
};
