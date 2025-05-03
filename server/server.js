// server/server.js
const http = require('http');
const app = require('./app');
const { connectDB, app: appConfig } = require('./config');
const logger = require('./logs/logger');

// Optional: HTTPS support (uncomment and configure if needed)
// const https = require('https');
// const fs = require('fs');
// const sslOptions = {
//   key: fs.readFileSync('/path/to/ssl.key'),
//   cert: fs.readFileSync('/path/to/ssl.crt')
// };

const PORT = appConfig.port;

// Connect to MongoDB
connectDB();

// Create HTTP server
const server = http.createServer(app);
// For HTTPS, use:
// const server = https.createServer(sslOptions, app);

server.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT} [${appConfig.nodeEnv}]`);
  console.log(`🚀 Server running on port ${PORT} [${appConfig.nodeEnv}]`);
});

// Graceful shutdown
const shutdown = (signal) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    logger.info('Closed out remaining connections.');
    process.exit(0);
  });
  // If after 10 seconds, force exit
  setTimeout(() => {
    logger.error('Forcing shutdown after timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

// Handle uncaught exceptions and unhandled promise rejections
process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`, { stack: err.stack });
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled Rejection: ${reason}`);
  process.exit(1);
});
