import express from 'express';
import { BookingRecordController } from '../controllers/booking.controller';
import auth from '../middlewares/auth';
import validateRequest from '../middlewares/validateRequest';
import { BookingRecordValidation } from '../validations/booking.validation';

// Create Express router instance
const router = express.Router();

router
  // Get all booking records for authenticated user
  .get('/', auth(), BookingRecordController.getAllBookingRecord)
  // Get specific booking record by ID
  .get('/:bookingId', auth(), BookingRecordController.getBookingRecord)

  // Create new booking record with validation
  .post(
    '/',
    auth(),
    validateRequest(BookingRecordValidation.create),
    BookingRecordController.createBookingRecord
  );

export const BookingRecordRoutes = router;
