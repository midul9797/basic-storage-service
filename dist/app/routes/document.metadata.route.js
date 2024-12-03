"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentMetadataRoutes = void 0;
const express_1 = __importDefault(require("express"));
const document_metadata_controller_1 = require("../controllers/document.metadata.controller");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = express_1.default.Router();
router
    .get('/', (0, auth_1.default)(), document_metadata_controller_1.DocumentMetadataController.getDocumentMetadata)
    .post('/:documentId', (0, auth_1.default)(), document_metadata_controller_1.DocumentMetadataController.createDocumentMetadata)
    .patch('/:documentId', (0, auth_1.default)(), document_metadata_controller_1.DocumentMetadataController.updateDocumentMetadata)
    .delete('/:documentId', (0, auth_1.default)(), document_metadata_controller_1.DocumentMetadataController.deleteDocumentMetadata);
exports.DocumentMetadataRoutes = router;
