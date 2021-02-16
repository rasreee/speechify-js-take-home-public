import 'module-alias/register';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import Speechify from './speechify';
import { Data } from '../common';

const api = require('./api')

export default function createServer() {
  const app = express();

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


  app.post("/api/addToQueue", api.addToQueue);

  app.get("/api/getNextChunk", api.getNextChunk);

  return app;
}
