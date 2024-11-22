import express from "express";
import userRoute from "./userRoute.js";
import authenticate from "../middlewares/authenticate.js";
import authRoute from "./authRoute.js";
import oauthRoute from "./oauthRoute.js";
import journalRoute from "./journalRoute.js";
import analyticRoute from "./analyticRoute.js";

const router = express.Router();

router.use("/user", authenticate, userRoute);
// router.use("/auth", authRoute);
router.use("/auth", authenticate, oauthRoute);
router.use("/journal", journalRoute);
router.use("/analytic", authenticate, analyticRoute);

export default router;
