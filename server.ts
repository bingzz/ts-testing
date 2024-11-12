import express from 'express';
import router from './src/controllers/route.controller';
import loggerMiddleware from './src/middlewares/logger.middleware';

const app = express();
const PORT = 3000;

app.use(router);

// Middleware
app.use(loggerMiddleware);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});