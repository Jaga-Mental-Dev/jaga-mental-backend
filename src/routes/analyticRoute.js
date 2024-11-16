import express from "express";
import { getEmotionCount } from "../controllers/analyticController.js";

const analyticRoute = express.Router();

analyticRoute.get("/", getEmotionCount);

export default analyticRoute;
