import express from "express";
import { getEmotionCount } from "../controllers/analyticController.js";

const analyticRoute = express.Router();

<<<<<<< HEAD
analyticRoute.post("/", getEmotionCount);
=======
analyticRoute.get("/", getEmotionCount);
>>>>>>> dev

export default analyticRoute;
