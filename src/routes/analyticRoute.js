import express from "express";
import { getEmotionCount } from "../controllers/analyticController.js";

const analyticRoute = express.Router();

analyticRoute.post("/", getEmotionCount);

export default analyticRoute;
