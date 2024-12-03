"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_route_1 = require("./booking.route");
const document_metadata_route_1 = require("./document.metadata.route");
const system_configuration_route_1 = require("./system.configuration.route");
const user_route_1 = require("./user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/user',
        routes: user_route_1.UserRoutes,
    },
    {
        path: '/booking',
        routes: booking_route_1.BookingRecordRoutes,
    },
    {
        path: '/document-metadata',
        routes: document_metadata_route_1.DocumentMetadataRoutes,
    },
    {
        path: '/system-configuration',
        routes: system_configuration_route_1.SystemConfigurationRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
