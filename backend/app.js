const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const apiLimiter = require('./config/rateLimitConfig');
const { errorHandler } = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
const routes = require('./routes');
require('./config/env'); // Load env validation

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Core middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Request logging
app.use(requestLogger);

// Rate Limiting
app.use('/api', apiLimiter);

// Mount API routes
app.use('/api/auth', routes.authRoutes);
app.use('/api/users', routes.userRoutes);
app.use('/api/tenants', routes.tenantRoutes);
app.use('/api/metrics', routes.metricsRoutes);
app.use('/api/events', routes.eventRoutes);
app.use('/api/roles', routes.roleRoutes);
app.use('/api/dashboard', routes.dashboardRoutes);
app.use('/api/feedback', routes.feedbackRoutes);
app.use('/api/toggles', routes.featureToggleRoutes);
app.use('/api/sessions', routes.sessionRoutes); // Optional
app.use('/api/audit', routes.auditLogRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ success: true, message: 'SaaS Usage Analytics API is running' });
});

// Error handler
app.use(errorHandler);

module.exports = app;