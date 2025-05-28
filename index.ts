import express from "express";
import cors from "cors";
import http from "http";
import errorHandler from "./middlewear/errorHandler";
import "./config/db";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);
const server = http.createServer(app);

const startServer = async () => {
  server.listen(port, () => {
    console.log(`sever is listening on port ${port}`);
  });
};
startServer();
