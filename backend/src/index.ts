import express, { Application, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
const routes = require('./routes.js');
require('express-async-errors');

const cors = require('cors');

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) => {
  console.log(error);
  response.sendStatus(500);
});


app.listen(5000, () => console.log('🚀 Server started at http://localhost:5000'));
