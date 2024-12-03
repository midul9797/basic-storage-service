"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRecordService = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createBookingRecord = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield prisma.bookingRecord.create({
        data: payload,
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create document Metadata');
    return result;
});
const getBookingRecord = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookingRecord.findUnique({
        where: { id },
        select: {
            title: true,
            description: true,
            relatedDocuments: true,
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
    return result;
});
const getAllBookingRecord = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookingRecord.findMany({
        where: { user: { email } },
        select: {
            title: true,
            description: true,
            relatedDocuments: true,
            user: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
    return result;
});
const updateBookingRecord = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookingRecord.update({ where: { id }, data });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update booking record');
    return true;
});
const deleteBookingRecord = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookingRecord.delete({ where: { id } });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to delete document metadata');
    return true;
});
exports.BookingRecordService = {
    getBookingRecord,
    getAllBookingRecord,
    updateBookingRecord,
    createBookingRecord,
    deleteBookingRecord,
};
