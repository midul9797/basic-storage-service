"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        userId: zod_1.z.string(),
        documentIds: zod_1.z.array(zod_1.z.string()),
        bookingDate: zod_1.z.string(),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        documentIds: zod_1.z.array(zod_1.z.string()),
        bookingDate: zod_1.z.string(),
    }),
});
exports.UserValidation = {
    update,
    create,
};
