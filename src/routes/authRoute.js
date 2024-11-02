import express from "express";
import { login, registration } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/register", registration);
authRoute.post("/login", login);

export default authRoute;
