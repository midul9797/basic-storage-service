"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemConfigurationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const system_configuration_controller_1 = require("../controllers/system.configuration.controller");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
router
    .get('/', (0, auth_1.default)(), system_configuration_controller_1.SystemConfigurationController.getSystemConfiguration)
    .post('/', (0, auth_1.default)(), system_configuration_controller_1.SystemConfigurationController.createSystemConfiguration)
    .patch('/', (0, auth_1.default)(), system_configuration_controller_1.SystemConfigurationController.updateSystemConfiguration);
exports.SystemConfigurationRoutes = router;
