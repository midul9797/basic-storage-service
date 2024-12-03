import express from 'express';

import { BookingRecordRoutes } from './booking.route';
import { DocumentMetadataRoutes } from './document.metadata.route';
import { SystemConfigurationRoutes } from './system.configuration.route';
import { UserRoutes } from './user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/booking',
    routes: BookingRecordRoutes,
  },

  {
    path: '/document-metadata',
    routes: DocumentMetadataRoutes,
  },
  {
    path: '/system-configuration',
    routes: SystemConfigurationRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
