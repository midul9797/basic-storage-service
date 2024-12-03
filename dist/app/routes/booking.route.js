"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("../controllers/booking.controller");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
router
    .get('/', (0, auth_1.default)(), booking_controller_1.BookingRecordController.getAllBookingRecord)
    .get('/:bookingId', (0, auth_1.default)(), booking_controller_1.BookingRecordController.getBookingRecord)
    .post('/:bookingId', (0, auth_1.default)(), booking_controller_1.BookingRecordController.createBookingRecord)
    .patch('/:bookingId', (0, auth_1.default)(), booking_controller_1.BookingRecordController.updateBookingRecord)
    .delete('/:bookingId', (0, auth_1.default)(), booking_controller_1.BookingRecordController.deleteBookingRecord);
exports.BookingRecordRoutes = router;
