import { BookingRecord, PrismaClient } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Creates a new booking record
 * @param payload - The booking record data to create
 * @returns The created booking record
 * @throws ApiError if creation fails
 */
const createBookingRecord = async (
  payload: BookingRecord
): Promise<Partial<BookingRecord>> => {
  const result = await prisma.bookingRecord.create({
    data: payload,
  });
  if (!result)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create booking');
  return result;
};

/**
 * Retrieves a single booking record by ID
 * @param id - The ID of the booking record to retrieve
 * @returns The booking record if found
 * @throws ApiError if record not found
 */
const getBookingRecord = async (
  id: string
): Promise<Partial<BookingRecord> | null> => {
  const result = await prisma.bookingRecord.findUnique({
    where: { id },
  });
  if (!result)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get booking record');
  return result;
};

/**
 * Retrieves all booking records for a user
 * @param userId - The ID of the user whose bookings to retrieve
 * @returns Array of booking records
 * @throws ApiError if retrieval fails
 */
const getAllBookingRecord = async (
  userId: string
): Promise<Partial<BookingRecord>[] | null> => {
  const result = await prisma.bookingRecord.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });
  if (!result)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get booking records');
  return result;
};

/**
 * Updates an existing booking record
 * @param id - The ID of the booking record to update
 * @param data - The updated booking record data
 * @returns true if update successful
 * @throws ApiError if update fails
 */
const updateBookingRecord = async (
  id: string,
  data: Partial<BookingRecord>
): Promise<boolean | null> => {
  const result = await prisma.bookingRecord.update({ where: { id }, data });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to update booking record'
    );
  return true;
};

/**
 * Deletes a booking record
 * @param id - The ID of the booking record to delete
 * @returns true if deletion successful
 * @throws ApiError if deletion fails
 */
const deleteBookingRecord = async (id: string): Promise<boolean | null> => {
  const result = await prisma.bookingRecord.delete({ where: { id } });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to delete booking record'
    );
  return true;
};

// Export all booking record related services
export const BookingRecordService = {
  getBookingRecord,
  getAllBookingRecord,
  updateBookingRecord,
  createBookingRecord,
  deleteBookingRecord,
};
