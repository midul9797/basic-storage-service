import express from 'express';
import { DocumentMetadataController } from '../controllers/document.metadata.controller';
import auth from '../middlewares/auth';
import validateRequest from '../middlewares/validateRequest';
import { DocumentMetadataValidation } from '../validations/document.metadata.validation';

// Create Express router instance
const router = express.Router();

router
  // Get document metadata by booking ID
  .get(
    '/booking/:bookingId',
    auth(),
    DocumentMetadataController.getDocumentMetadataByBookingId
  )

  // Get document metadata by file ID
  .get(
    '/file/:fileId',
    auth(),
    DocumentMetadataController.getDocumentMetadataByFileId
  )
  //Get document metadata from cache
  .get('/cache', auth(), DocumentMetadataController.getDocumentMetadataCache)

  // Get specific document metadata by ID
  .get('/:documentId', auth(), DocumentMetadataController.getDocumentMetadata)
  // Get all document metadata
  .get('/', auth(), DocumentMetadataController.getAllDocumentMetadata)
  // Create new document metadata
  .post(
    '/',
    auth(),
    validateRequest(DocumentMetadataValidation.create),
    DocumentMetadataController.createDocumentMetadata
  )
  // Update existing document metadata
  .patch(
    '/:documentId',
    auth(),
    validateRequest(DocumentMetadataValidation.update),
    DocumentMetadataController.updateDocumentMetadata
  )
  // Delete document metadata
  .delete(
    '/:documentId',
    auth(),
    DocumentMetadataController.deleteDocumentMetadata
  );

export const DocumentMetadataRoutes = router;
