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
exports.SystemConfigurationService = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createSystemConfiguration = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.systemConfiguration.create({
        data: payload,
        select: {
            key: true,
            value: true,
            user: { select: { name: true, email: true } },
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create systemConfiguration');
    return result;
});
const getSystemConfiguration = (email, key) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.systemConfiguration.findFirst({
        where: { key, user: { email } },
        select: {
            key: true,
            value: true,
            user: { select: { name: true, email: true } },
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to get system Configuration');
    return result;
});
const updateSystemConfiguration = (key, email, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.systemConfiguration.updateMany({
        where: { key, user: { email } },
        data,
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to update System configuration');
    return true;
});
exports.SystemConfigurationService = {
    getSystemConfiguration,
    updateSystemConfiguration,
    createSystemConfiguration,
};
