// Import required dependencies
import { Server } from 'http';
import app from './app';
import config from './config';
import { RedisClient } from './shared/redis';

/**
 * Bootstrap function to start the server and set up error handlers
 */
async function bootstrap() {
  // Create and start HTTP server
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
  //Connecting to redis
  await RedisClient.connect();
  /**
   * Handler to gracefully shut down server and exit process
   */
  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server Closed');
      });
    }
    process.exit(1);
  };

  /**
   * Handler for unexpected errors that logs error and exits
   */
  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };

  // Set up global error handlers
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  // Handle termination signal
  process.on('SIGTERM', () => {
    console.log('SIGTERM recieved');
    if (server) {
      server.close();
    }
  });
}

// Start the server
bootstrap();
