const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiLimiter = require('./config/rateLimitConfig');
const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');

// Load environment variables early
dotenv.config();
require('./config/env'); // Validates required environment variables

// Route modules
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const metricsRoutes = require('./routes/metricsRoutes');
const eventRoutes = require('./routes/eventRoutes');
const roleRoutes = require('./routes/roleRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const featureToggleRoutes = require('./routes/featureToggleRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const auditLogRoutes = require('./routes/auditLogRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware: Core
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev logging (only in development)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware: Custom request logging
app.use(requestLogger);

// Middleware: Rate Limiting (all API routes)
app.use('/api', apiLimiter);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/toggles', featureToggleRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/audit', auditLogRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ success: true, message: 'SaaS Usage Analytics API is running' });
});

// Global error handler
app.use(errorHandler);

// Start server (if using directly, not from index.js)
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;