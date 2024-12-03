import { z } from 'zod';

// Validation schema for creating a new user
// Requires name and email, with optional contact and profile details
const create = z.object({
  body: z.object({
    name: z.string(), // User's full name
    email: z.string(), // User's email address
    phone: z.string().optional(), // Optional phone number
    address: z.string().optional(), // Optional physical address
    country: z.string().optional(), // Optional country of residence
    profileImage: z.string().optional(), // Optional profile image URL/path
  }),
});

// Validation schema for updating an existing user
// All fields are optional to allow partial updates
const update = z.object({
  body: z.object({
    name: z.string().optional(), // User's full name
    email: z.string().optional(), // User's email address
    phone: z.string().optional(), // Phone number
    address: z.string().optional(), // Physical address
    country: z.string().optional(), // Country of residence
    profileImage: z.string().optional(), // Profile image URL/path
  }),
});

// Export validation schemas
export const UserValidation = {
  update,
  create,
};
