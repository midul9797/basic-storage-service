import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';

import sendResponse from '../../shared/sendResponse';

import { SystemConfigurationService } from '../services/system.configuration.service';

/**
 * Creates a new system configuration record
 * @param req Request object containing configuration data in body and clerk user in req.user
 * @param res Response object
 */
const createSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const { clerkId } = req.user as any;
    const result = await SystemConfigurationService.createSystemConfiguration({
      ...payload,
      userId: clerkId,
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'System Configuration created successfully',
      data: result,
    });
  }
);

/**
 * Retrieves a specific system configuration by key for a user
 * @param req Request object containing key in params and clerk user in req.user
 * @param res Response object
 */
const getSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const { key } = req.params;
    const { clerkId } = req.user as any;
    const result = await SystemConfigurationService.getSystemConfiguration(
      clerkId,
      key
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'System Configuration retrived successfully',
      data: result,
    });
  }
);

/**
 * Updates a system configuration value for a specific key
 * @param req Request object containing key and value in body and clerk user in req.user
 * @param res Response object
 */
const updateSystemConfiguration = catchAsync(
  async (req: Request, res: Response) => {
    const { key, value } = req.body;
    const { clerkId } = req.user as any;
    const result = await SystemConfigurationService.updateSystemConfiguration(
      key,
      clerkId,
      value
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'System Configuration updated successfully',
      data: result,
    });
  }
);

export const SystemConfigurationController = {
  getSystemConfiguration,
  updateSystemConfiguration,
  createSystemConfiguration,
};
