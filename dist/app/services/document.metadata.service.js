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
exports.DocumentMetadataService = void 0;
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const prisma = new client_1.PrismaClient();
const createDocumentMetadata = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.documentMetadata.create({
        data: payload,
        select: {
            title: true,
            version: true,
            lastModified: true,
            author: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create document Metadata');
    return result;
});
const getDocumentMetadata = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.documentMetadata.findUnique({
        where: { id },
        select: {
            title: true,
            version: true,
            lastModified: true,
            author: {
                select: {
                    name: true,
                    email: true,
                },
            },
        },
    });
    return result;
});
const updateDocumentMetadata = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.documentMetadata.update({ where: { id }, data });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to updated document metadata');
    return true;
});
const deleteDocumentMetadata = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.documentMetadata.delete({ where: { id } });
    if (!result)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to delete document metadata');
    return true;
});
exports.DocumentMetadataService = {
    getDocumentMetadata,
    updateDocumentMetadata,
    createDocumentMetadata,
    deleteDocumentMetadata,
};
