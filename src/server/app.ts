import "dotenv/config";
import { Application } from "express";
import createServer from "./server";

const startServer = () => {
  const app: Application = createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 8050;
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();
