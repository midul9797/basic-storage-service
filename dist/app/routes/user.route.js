"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
router
    .get('/', (0, auth_1.default)(), user_controller_1.UserController.getUser)
    .post('/', (0, auth_1.default)(), user_controller_1.UserController.createUser)
    .patch('/', (0, auth_1.default)(), user_controller_1.UserController.updateUser);
exports.UserRoutes = router;
