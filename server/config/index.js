// server/config/index.js
const env = require('./env');
const connectDB = require('./db');

module.exports = {
  env,
  connectDB,
  app: {
    port: env.port,
    nodeEnv: env.nodeEnv,
    frontendUrl: env.frontendUrl,
  },
  jwt: {
    secret: env.jwtSecret,
    expiresIn: '1d',
  },
  smtp: {
    host: env.smtp.host,
    port: env.smtp.port,
    user: env.smtp.user,
    pass: env.smtp.pass,
    from: env.smtp.from,
  },
  mongo: {
    uri: env.mongoUri,
  },
};
