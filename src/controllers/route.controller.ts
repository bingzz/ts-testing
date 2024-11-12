import express from 'express';

const routeController = express.Router();

routeController.get('/', (req, res, next) => {
  res.send('Hello World');

  next();
});

routeController.get('/seed', (req, res, next) => {
  res.send('Seeding');

  next();
});

export default routeController;