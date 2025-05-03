// server/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { apiLimiter } = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const config = require('./config');
const logger = require('./logs/logger');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const featureRoutes = require('./routes/featureRoutes');
const auditLogRoutes = require('./routes/auditLogRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(cors({
  origin: config.app.frontendUrl,
  credentials: true
}));

// Logging (HTTP requests)
app.use(morgan('dev', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
}));

// Rate limiting (global)
app.use('/api/', apiLimiter);

// Body parsing
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Custom request logger
app.use(requestLogger);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/features', featureRoutes);
app.use('/api/audit-logs', auditLogRoutes);
app.use('/api/settings', settingsRoutes);

// Static files (if you serve docs or public assets)
app.use('/public', express.static(path.join(__dirname, 'public')));

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Centralized error handler
app.use(errorLogger);

module.exports = app;
