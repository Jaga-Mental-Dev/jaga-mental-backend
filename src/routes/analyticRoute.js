import express from "express";
import { getEmotionCount } from "../controllers/analyticController.js";

const analyticRoute = express.Router();

analyticRoute.get("/", getEmotionCount);
<<<<<<< HEAD
=======

>>>>>>> fed4488814fe15cd163a689c7e274928360219fb

export default analyticRoute;
