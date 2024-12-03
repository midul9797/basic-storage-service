import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../shared/catchAsync';

import sendResponse from '../../shared/sendResponse';

import { UserService } from '../services/user.service';

/**
 * Creates a new user
 * @param req Request object containing user data in body
 * @param res Response object
 */
const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserService.createUser(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

/**
 * Retrieves current user information
 * @param req Request object containing clerk user in req.user
 * @param res Response object
 */
const getUser = catchAsync(async (req: Request, res: Response) => {
  const { email, name, clerkId } = req.user as any;
  const result = await UserService.getUser(email, name, clerkId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});

/**
 * Retrieves a user by their email address
 * @param req Request object containing email in params
 * @param res Response object
 */
const getUserByEmail = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const result = await UserService.getUserByEmail(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrived successfully',
    data: result,
  });
});

/**
 * Updates current user information
 * @param req Request object containing update data in body and clerk user in req.user
 * @param res Response object
 */
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { clerkId } = req.user as any;
  const result = await UserService.updateUser(clerkId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

export const UserController = {
  getUser,
  updateUser,
  createUser,
  getUserByEmail,
};
