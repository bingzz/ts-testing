import express from 'express';

const loggerMiddleware = express.Router();

loggerMiddleware.use((req, res, next) => {
  console.log('Activity logged', { url: req.url });
});

export default loggerMiddleware;