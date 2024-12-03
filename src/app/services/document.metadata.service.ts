import { DocumentMetadata, PrismaClient } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { RedisClient } from '../../shared/redis';

// Initialize Prisma client
const prisma = new PrismaClient();

/**
 * Creates a new document metadata record
 * @param payload - The document metadata to create
 * @returns Partial document metadata with selected fields
 */
const createDocumentMetadata = async (
  payload: DocumentMetadata
): Promise<Partial<DocumentMetadata>> => {
  const result = await prisma.documentMetadata.create({
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
  await RedisClient.setDocumentMetadataCache(
    payload.authorId,
    JSON.stringify(result)
  );
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to create document Metadata'
    );
  return result;
};

/**
 * Retrieves all document metadata for a specific author
 * @param authorId - The ID of the author
 * @returns Array of partial document metadata
 */
const getAllDocumentMetadata = async (
  authorId: string
): Promise<Partial<DocumentMetadata>[] | null> => {
  const result = await prisma.documentMetadata.findMany({
    where: { authorId },
    select: {
      id: true,
      title: true,
      version: true,
      lastModified: true,
      fileId: true,
      author: {
        select: {
          name: true,
          email: true,
        },
      },
      BookingRecord: true,
    },
    orderBy: { lastModified: 'desc' },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get documents metadata'
    );
  return result;
};

/**
 * Retrieves a single document metadata by ID
 * @param id - The document metadata ID
 * @returns Partial document metadata or null
 */
const getDocumentMetadata = async (
  id: string
): Promise<Partial<DocumentMetadata> | null> => {
  const result = await prisma.documentMetadata.findUnique({
    where: { id },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get document metadata'
    );
  return result;
};

/**
 * Retrieves document metadata by file ID
 * @param id - The file ID
 * @returns Partial document metadata or null
 */
const getDocumentMetadataByFileId = async (
  id: string
): Promise<Partial<DocumentMetadata> | null> => {
  const result = await prisma.documentMetadata.findFirst({
    where: { fileId: id },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get document metadata'
    );
  return result;
};

/**
 * Retrieves all document metadata associated with a booking ID
 * @param id - The booking ID
 * @returns Array of partial document metadata
 */
const getDocumentMetadataByBookingIdFromDB = async (
  id: string
): Promise<Partial<DocumentMetadata>[] | null> => {
  const result = await prisma.documentMetadata.findMany({
    where: { bookingId: id },
    select: {
      id: true,
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
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get documents metadata'
    );
  return result;
};
/**
 * Retrieves document metadata from Redis cache by ID
 * @param id - The ID to lookup in cache
 * @returns Array of partial document metadata or null
 */
const getDocumentMetadataFromRedisCache = async (
  id: string
): Promise<Partial<DocumentMetadata>[] | null> => {
  const result = await RedisClient.getDocumentMetadataCache(id);

  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to get documents metadata'
    );

  return result;
};

/**
 * Updates document metadata and increments version
 * @param id - The document metadata ID
 * @param data - The updated document metadata
 * @returns Boolean indicating success
 */
const updateDocumentMetadata = async (
  id: string,
  data: Partial<DocumentMetadata>
): Promise<boolean | null> => {
  console.log(id, data);
  const result = await prisma.documentMetadata.update({
    where: { id },
    data: { ...data, version: { increment: 1 } },
  });
  console.log(result);
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to updated document metadata'
    );
  return true;
};

/**
 * Deletes document metadata by ID or file ID
 * @param id - The document metadata ID or file ID
 * @returns Boolean indicating success
 */
const deleteDocumentMetadata = async (id: string): Promise<boolean | null> => {
  const result = await prisma.documentMetadata.deleteMany({
    where: { OR: [{ id }, { fileId: id }] },
  });
  if (!result)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to delete document metadata'
    );
  return true;
};

// Export all document metadata service functions
export const DocumentMetadataService = {
  getDocumentMetadata,
  updateDocumentMetadata,
  createDocumentMetadata,
  deleteDocumentMetadata,
  getAllDocumentMetadata,
  getDocumentMetadataByBookingIdFromDB,
  getDocumentMetadataByFileId,
  getDocumentMetadataFromRedisCache,
};
