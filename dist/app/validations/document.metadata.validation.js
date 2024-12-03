"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentMetadataValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        authorId: zod_1.z.string(),
        version: zod_1.z.number(),
        bookingId: zod_1.z.string(),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        version: zod_1.z.number(),
    }),
});
exports.DocumentMetadataValidation = {
    update,
    create,
};
