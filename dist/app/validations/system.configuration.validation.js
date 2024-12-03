"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemConfigurationValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        key: zod_1.z.string(),
        value: zod_1.z.string(),
        userId: zod_1.z.string(),
        description: zod_1.z.string().optional(),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        key: zod_1.z.string(),
        value: zod_1.z.string(),
        description: zod_1.z.string().optional(),
    }),
});
exports.SystemConfigurationValidation = {
    update,
    create,
};
