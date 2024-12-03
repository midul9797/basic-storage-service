import express from 'express';
import { SystemConfigurationController } from '../controllers/system.configuration.controller';
import auth from '../middlewares/auth';
import validateRequest from '../middlewares/validateRequest';
import { SystemConfigurationValidation } from '../validations/system.configuration.validation';

// Create Express router instance
const router = express.Router();

// Define routes for system configuration
router
  // Get system configuration by key
  .get('/:key', auth(), SystemConfigurationController.getSystemConfiguration)
  // Create new system configuration
  .post(
    '/',
    auth(),
    validateRequest(SystemConfigurationValidation.create),
    SystemConfigurationController.createSystemConfiguration
  )
  // Update existing system configuration
  .patch(
    '/',
    auth(),
    validateRequest(SystemConfigurationValidation.update),
    SystemConfigurationController.updateSystemConfiguration
  );

export const SystemConfigurationRoutes = router;
