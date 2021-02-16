import 'module-alias/register';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import routes from './routes'
import { createRedisSession } from './sessions';
import { router } from 'bull-board'

export default function createServer() {
  const app: Application = express();

  app.use(cors());
  app.use(bodyParser.json({ type: ['application/json', 'application/*+json'] }));
  app.use(bodyParser.urlencoded({ extended: true }));

  // Redis session
  app.use(createRedisSession())
  // Handle lost connection
  app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('Lost connection to session...'))
    }
    next()
  })

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello world!");
  });
  app.use('/admin/queues', router)
  app.use(routes);

  return app;
}
