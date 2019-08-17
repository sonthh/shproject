const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 3000,
  },
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  secret: 'hoanghuyit',
  db: `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
};
