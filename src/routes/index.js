import express from "express";
import userRoute from "./userRoute.js";
import authenticate from "../middlewares/authenticate.js";
import authRoute from "./authRoute.js";

const router = express.Router();

router.use("/user", authenticate, userRoute);
router.use("/auth", authRoute);

export default router;
