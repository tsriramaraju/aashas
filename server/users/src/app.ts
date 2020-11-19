import 'colors';
import 'express-async-errors';
import express, { json } from 'express';
import { errorHandler, loggers, NotFoundError, security } from '@aashas/common';

/**
 * initiate express app and body parser for json requests
 */
const app = express();
app.use(json());

app.set('trust proxy', true);

//clear base logs
console.clear();
security(app);
process.env.NODE_ENV !== 'test' && loggers(app);

/**
 * 404 route
 */
app.all('*', async (req, res) => {
  res.json(req.body);
  throw new NotFoundError();
});

/**
 * Custom error handling middleware
 */
app.use(errorHandler);

export { app };