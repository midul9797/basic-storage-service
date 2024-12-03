import { z } from 'zod';

// Validation schema for creating a new system configuration
// Requires key, value, userId and optional description
const create = z.object({
  body: z.object({
    key: z.string(),
    value: z.string(),
    description: z.string().optional(),
  }),
});

// Validation schema for updating an existing system configuration
// Requires key, value and optional description
const update = z.object({
  body: z.object({
    key: z.string(),
    value: z.string(),
    description: z.string().optional(),
  }),
});

// Export validation schemas
export const SystemConfigurationValidation = {
  update,
  create,
};
