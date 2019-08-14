module.exports = {
  env: process.env.NODE_ENV || 'development',
  server: {
    port: process.env.PORT || 3000,
  },
  logging: {
    level: process.env.LOG_LEVEL || 'debug',
  },
  secret: 'hoanghuyit',
  db: 'mongodb://localhost/music',
};
