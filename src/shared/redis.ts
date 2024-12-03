import { DocumentMetadata } from '@prisma/client';
import { SetOptions, createClient } from 'redis';
import config from '../config';

// Create Redis clients for different purposes
const redisClient = createClient({
  url: config.redis.url,
});

const redisPubClient = createClient({
  url: config.redis.url,
});

const redisSubClient = createClient({
  url: config.redis.url,
});

// Set up event handlers for the main Redis client
redisClient.on('error', error => console.log('RedisError', error));
redisClient.on('connect', error => console.log('Redis Connected', error));

/**
 * Establishes connections to all Redis clients
 */
const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisPubClient.connect();
  await redisSubClient.connect();
};

/**
 * Sets a key-value pair in Redis with optional configuration
 */
const set = async (
  key: string,
  value: string,
  options?: SetOptions
): Promise<void> => {
  await redisClient.set(key, value, options);
};

/**
 * Retrieves a value from Redis by key
 */
const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

/**
 * Deletes a key from Redis
 */
const del = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

/**
 * Caches document metadata for a user
 * Maintains a list of tokens with expiration and max size of 100
 */
const setDocumentMetadataCache = async (
  userId: string,
  token: string
): Promise<void> => {
  const key = `document-metadata:${userId}`;
  await redisClient.lPush(key, token);
  await redisClient.expire(key, Number(config.redis.expires_in));

  // Keep only the most recent 100 items
  await redisClient.lTrim(key, 0, 99);
};

/**
 * Retrieves cached document metadata for a user
 * Returns parsed JSON array of documents
 */
const getDocumentMetadataCache = async (
  userId: string
): Promise<DocumentMetadata[] | null> => {
  const key = `document-metadata:${userId}`;
  const notifications = await redisClient.lRange(key, 0, -1);
  return notifications.map(notification => JSON.parse(notification));
};

/**
 * Removes cached document metadata for a user
 */
const delDocumentMetadataCache = async (userId: string): Promise<void> => {
  const key = `document-metadata:${userId}`;
  await redisClient.del(key);
};

/**
 * Gracefully closes all Redis client connections
 */
const disconnect = async (): Promise<void> => {
  await redisClient.quit();
  await redisPubClient.quit();
  await redisSubClient.quit();
};

// Export Redis client interface with all available operations
export const RedisClient = {
  connect,
  set,
  get,
  del,
  setDocumentMetadataCache,
  getDocumentMetadataCache,
  delDocumentMetadataCache,
  disconnect,
  publish: redisPubClient.publish.bind(redisPubClient),
  subscribe: redisSubClient.subscribe.bind(redisSubClient),
};
