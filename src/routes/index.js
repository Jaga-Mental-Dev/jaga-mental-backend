import express from "express";
import userRoute from "./userRoute.js";
import authenticate from "../middlewares/authenticate.js";
import authRoute from "./authRoute.js";
import getPredict from "../controllers/testModel.js";
import multer from "multer";
import oauthRoute from "./oauthRoute.js";
import journalRoute from "./journalRoute.js";
import analyticRoute from "./analyticRoute.js";

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.use("/user", authenticate, userRoute);
router.use("/auth", authRoute);
router.use("/oauth", authenticate, oauthRoute);
router.use("/journal", authenticate, journalRoute);
router.use("/analytic", analyticRoute);

export default router;
