// Import required dependencies
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

// Import middleware for parsing requests
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Initialize Express application
const app: Application = express();

// Configure body-parser middleware with 50mb limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Enable CORS with credentials
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

// Enable cookie parsing
app.use(cookieParser());

// Configure Express built-in body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use('/api/v1', routes);

// Configure global error handling middleware
app.use(globalErrorHandler);

// Handle 404 Not Found errors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
