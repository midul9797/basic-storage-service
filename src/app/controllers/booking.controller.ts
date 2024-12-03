import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ClerkTokenPayload } from '../../interfaces/common';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import { BookingRecordService } from '../services/booking.service';

/**
 * Creates a new booking record
 * @param req Request object containing booking data in body and clerk user in req.user
 * @param res Response object
 */
const createBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { clerkId } = req.user as ClerkTokenPayload;

  const result = await BookingRecordService.createBookingRecord({
    ...payload,
    userId: clerkId,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Record created successfully',
    data: result,
  });
});

/**
 * Retrieves a specific booking record by ID
 * @param req Request object containing bookingId in params
 * @param res Response object
 */
const getBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const { bookingId } = req.params;
  const result = await BookingRecordService.getBookingRecord(bookingId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Record retrived successfully',
    data: result,
  });
});

/**
 * Retrieves all booking records for a specific user
 * @param req Request object containing clerk user in req.user
 * @param res Response object
 */
const getAllBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const { clerkId } = req.user as ClerkTokenPayload;
  const result = await BookingRecordService.getAllBookingRecord(clerkId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Records retrived successfully',
    data: result,
  });
});

/**
 * Updates a specific booking record
 * @param req Request object containing bookingId in params and update data in body
 * @param res Response object
 */
const updateBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  const result = await BookingRecordService.updateBookingRecord(
    bookingId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Record updated successfully',
    data: result,
  });
});

/**
 * Deletes a specific booking record
 * @param req Request object containing bookingId in params
 * @param res Response object
 */
const deleteBookingRecord = catchAsync(async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  const result = await BookingRecordService.deleteBookingRecord(bookingId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Record deleted successfully',
    data: result,
  });
});

export const BookingRecordController = {
  getBookingRecord,
  getAllBookingRecord,
  updateBookingRecord,
  createBookingRecord,
  deleteBookingRecord,
};
