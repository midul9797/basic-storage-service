import express from 'express';
import { UserController } from '../controllers/user.controller';
import auth from '../middlewares/auth';
import validateRequest from '../middlewares/validateRequest';
import { UserValidation } from '../validations/user.validation';

// Create Express router instance
const router = express.Router();

router
  // Get user by email
  .get('/:email', auth(), UserController.getUserByEmail)
  // Get authenticated user
  .get('/', auth(), UserController.getUser)
  // Create new user
  .post(
    '/',
    auth(),
    validateRequest(UserValidation.create),
    UserController.createUser
  )
  // Update existing user
  .patch(
    '/',
    auth(),
    validateRequest(UserValidation.update),
    UserController.updateUser
  );

export const UserRoutes = router;
