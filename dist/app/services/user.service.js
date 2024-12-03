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
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({ data: payload });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create user');
    return result;
});
const getUser = (email, name, clerkId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findFirst({
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
    if (!result)
        return createUser({
            id: clerkId,
            email,
            name,
            clerkId,
            phone: null,
            country: null,
            address: null,
            profileImage: null,
        });
    return result;
});
const updateUser = (clerkId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.update({ where: { clerkId }, data });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Wrong not registered');
    return true;
});
exports.UserService = {
    getUser,
    updateUser,
    createUser,
};
