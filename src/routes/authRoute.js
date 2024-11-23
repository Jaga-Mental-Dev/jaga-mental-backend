import express from "express";
import { loginOrRegist } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/local", loginOrRegist);

export default authRoute;
