import { PrismaClient, SystemConfiguration, User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { SystemConfigurationService } from './system.configuration.service';

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Creates a new user in the database
 * @param payload User data to create
 * @returns Created user object
 * @throws ApiError if creation fails
 */
const createUser = async (payload: User): Promise<Partial<User>> => {
  const result = await prisma.user.create({ data: payload });
  if (!result)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create user');
  return result;
};

/**
 * Gets a user by clerk ID, creates new user if not found
 * @param email User's email
 * @param name User's name
 * @param clerkId Clerk authentication ID
 * @returns User object or null
 */
const getUser = async (
  email: string,
  name: string,
  clerkId: string
): Promise<Partial<User> | null> => {
  const result = await prisma.user.findFirst({
    where: { clerkId },
    select: {
      name: true,
      email: true,
      phone: true,
      address: true,
      country: true,
      profileImage: true,
    },
  });

  // If user not found, create new user with default system configurations
  if (!result) {
    const user = await createUser({
      id: clerkId,
      email,
      name,
      clerkId,
    } as User);

    // Set default dark mode configuration
    await SystemConfigurationService.createSystemConfiguration({
      userId: clerkId,
      key: 'darkMode',
      value: 'off',
    } as SystemConfiguration);

    // Set default notification type configuration
    await SystemConfigurationService.createSystemConfiguration({
      userId: clerkId,
      key: 'notificationType',
      value: 'email',
    } as SystemConfiguration);
    return user;
  }
  return result;
};

/**
 * Checks if a user exists by email
 * @param email User's email to check
 * @returns true if user exists, throws error if not found
 * @throws ApiError if user not found
 */
const getUserByEmail = async (email: string): Promise<User | null> => {
  const result = await prisma.user.findFirst({ where: { email } });
  if (!result) throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  return result;
};

/**
 * Updates user information
 * @param clerkId Clerk authentication ID
 * @param data Updated user data
 * @returns true if update successful, throws error if failed
 * @throws ApiError if update fails
 */
const updateUser = async (
  clerkId: string,
  data: Partial<User>
): Promise<boolean | null> => {
  const result = await prisma.user.update({ where: { clerkId }, data });
  if (!result)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to update user');
  return true;
};

// Export service methods
export const UserService = {
  getUser,
  updateUser,
  createUser,
  getUserByEmail,
};
