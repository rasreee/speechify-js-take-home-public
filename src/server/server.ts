import 'module-alias/register';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import Speechify from './speechify';


function createServer() {
  const app = express();

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const port: number = Number(process.env.PORT) || 8050;

  const speechify = new Speechify();

  app.post("/api/addToQueue", (req, res) => {
    const result = speechify.addToQueue(req.body);
    res.send({ success: result });
  });

  app.get("/api/getNextChunk", (req, res) => {
    const chunk = speechify.getNextChunk();
    res.send({ chunk });
  });

  // START THE SERVER
  app.listen(port);
  console.log(`App listening on ${port}`);
  return app;
}

module.exports = createServer