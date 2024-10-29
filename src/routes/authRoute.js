import express from "express";
import { auth } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.get("/verify", auth);

export default authRoute;
