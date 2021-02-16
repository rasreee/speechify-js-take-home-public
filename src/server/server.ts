import 'module-alias/register';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import routes from './routes'
import { createRedisSession } from './sessions';

export default function createServer() {
  const app: Application = express();

  app.use(cors());
  app.use(bodyParser.json({ type: ['application/json', 'application/*+json'] }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(createRedisSession())

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
  });
  app.use(routes);

  return app;
}
