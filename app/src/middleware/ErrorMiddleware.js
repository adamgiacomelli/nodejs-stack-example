const logger = require('../helpers/logger');

const errorMiddleware = (err, req, res, next) => {
  logger.error(`Error message: ${err.message}`);
  logger.silly(`Error stack: ${err.stack}`);

  let statusCode = 500; // Default error response code
  if (err.statusCode) {
    statusCode = err.statusCode;
  }

  res.status(statusCode).send({
    code: err.code || 'server/error',
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : '',
  });
};

module.exports = errorMiddleware;
