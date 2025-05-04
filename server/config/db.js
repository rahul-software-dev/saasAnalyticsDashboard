const mongoose = require('mongoose');
const logger = require('../logs/logger'); // Use your main logger, not middleware logger
const env = require('./env'); // Use your env loader

async function connectDB() {
  try {
    const conn = await mongoose.connect(env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
