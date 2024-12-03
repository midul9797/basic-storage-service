import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';

import sendResponse from '../../shared/sendResponse';

import { ClerkTokenPayload } from '../../interfaces/common';
import { DocumentMetadataService } from '../services/document.metadata.service';

/**
 * Creates a new document metadata record
 * @param req Request object containing metadata in body and clerk user in req.user
 * @param res Response object
 */
const createDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const { clerkId } = req.user as ClerkTokenPayload;
    const result = await DocumentMetadataService.createDocumentMetadata({
      ...payload,
      authorId: clerkId,
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Document Metadata created successfully',
      data: result,
    });
  }
);

/**
 * Retrieves a specific document metadata by ID
 * @param req Request object containing documentId in params
 * @param res Response object
 */
const getDocumentMetadata = catchAsync(async (req: Request, res: Response) => {
  const { documentId } = req.params;
  const result = await DocumentMetadataService.getDocumentMetadata(documentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Document Metadata retrived successfully',
    data: result,
  });
});

/**
 * Retrieves document metadata associated with a booking ID
 * @param req Request object containing bookingId in params
 * @param res Response object
 */
const getDocumentMetadataByBookingId = catchAsync(
  async (req: Request, res: Response) => {
    const { bookingId } = req.params;
    const result =
      await DocumentMetadataService.getDocumentMetadataByBookingIdFromDB(
        bookingId
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Document Metadata retrived successfully',
      data: result,
    });
  }
);

/**
 * Retrieves document metadata associated with a file ID
 * @param req Request object containing fileId in params
 * @param res Response object
 */
const getDocumentMetadataByFileId = catchAsync(
  async (req: Request, res: Response) => {
    const { fileId } = req.params;
    const result = await DocumentMetadataService.getDocumentMetadataByFileId(
      fileId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Document Metadata retrived successfully',
      data: result,
    });
  }
);

/**
 * Retrieves all document metadata records for a specific user
 * @param req Request object containing clerk user in req.user
 * @param res Response object
 */
const getAllDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const { clerkId } = req.user as ClerkTokenPayload;
    const result = await DocumentMetadataService.getAllDocumentMetadata(
      clerkId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Documents Metadata retrived successfully',
      data: result,
    });
  }
);
/**
 * Retrieves all document metadata records for a specific user from cache
 * @param req Request object containing clerk user in req.user
 * @param res Response object
 */
const getDocumentMetadataCache = catchAsync(
  async (req: Request, res: Response) => {
    const { clerkId } = req.user as ClerkTokenPayload;
    const result = await DocumentMetadataService.getAllDocumentMetadata(
      clerkId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Documents Metadata Cache retrived successfully',
      data: result,
    });
  }
);

/**
 * Updates a specific document metadata record
 * @param req Request object containing documentId in params and update data in body
 * @param res Response object
 */
const updateDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const { documentId } = req.params;

    const result = await DocumentMetadataService.updateDocumentMetadata(
      documentId,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Document Metadata updated successfully',
      data: result,
    });
  }
);

/**
 * Deletes a specific document metadata record
 * @param req Request object containing documentId in params
 * @param res Response object
 */
const deleteDocumentMetadata = catchAsync(
  async (req: Request, res: Response) => {
    const { documentId } = req.params;

    const result = await DocumentMetadataService.deleteDocumentMetadata(
      documentId
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Document Metadata deleted successfully',
      data: result,
    });
  }
);

export const DocumentMetadataController = {
  getDocumentMetadata,
  updateDocumentMetadata,
  createDocumentMetadata,
  deleteDocumentMetadata,
  getAllDocumentMetadata,
  getDocumentMetadataByBookingId,
  getDocumentMetadataByFileId,
  getDocumentMetadataCache,
};
