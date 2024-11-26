import express from "express";
import { oauth } from "../controllers/oauthController.js";

const oauthRoute = express.Router();

oauthRoute.post("/oauth", oauth);

export default oauthRoute;
