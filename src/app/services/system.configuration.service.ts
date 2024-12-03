import { PrismaClient, SystemConfiguration } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Creates a new system configuration entry
 * @param payload - The system configuration data to create
 * @returns The created system configuration object
 * @throws ApiError if creation fails
 */
const createSystemConfiguration = async (
  payload: SystemConfiguration
): Promise<Partial<SystemConfiguration>> => {
  const result = await prisma.systemConfiguration.create({
    data: payload,
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to create system Configuration'
    );
  return result;
};

/**
 * Retrieves a system configuration by user ID and key
 * @param userId - The ID of the user
 * @param key - The configuration key to look up
 * @returns The matching system configuration or null if not found
 * @throws ApiError if retrieval fails
 */
const getSystemConfiguration = async (
  userId: string,
  key: string
): Promise<Partial<SystemConfiguration> | null> => {
  const result = await prisma.systemConfiguration.findFirst({
    where: { key, userId },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get system Configuration'
    );
  return result;
};

/**
 * Updates an existing system configuration
 * @param key - The configuration key to update
 * @param userId - The ID of the user
 * @param value - The new value to set
 * @returns True if update was successful, null otherwise
 * @throws ApiError if update fails
 */
const updateSystemConfiguration = async (
  key: string,
  userId: string,
  value: string
): Promise<boolean | null> => {
  const result = await prisma.systemConfiguration.updateMany({
    where: { key, userId },
    data: { value },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to update System configuration'
    );
  return true;
};

// Export service methods
export const SystemConfigurationService = {
  getSystemConfiguration,
  updateSystemConfiguration,
  createSystemConfiguration,
};
