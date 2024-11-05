"use strict";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { errorHandler } from "./middlewares/errHandler.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", router);

app.use(errorHandler);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log("App is listening on url http://localhost:" + port)
);
