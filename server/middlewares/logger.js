// server/middlewares/logger.js
const winston = require('winston');

// Create Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console()
  ]
});

// Request logger middleware
const requestLogger = (req, res, next) => {
  logger.info({
    message: 'HTTP Request',
    method: req.method,
    url: req.originalUrl,
    user: req.user ? req.user.id : null,
    tenant: req.user ? req.user.tenant : null,
    timestamp: new Date().toISOString()
  });
  next();
};

// Error logger middleware
const errorLogger = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
    user: req.user ? req.user.id : null,
    tenant: req.user ? req.user.tenant : null,
    timestamp: new Date().toISOString()
  });
  res.status(500).json({ message: 'Internal server error' });
};

module.exports = { logger, requestLogger, errorLogger };
