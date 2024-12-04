import express from "express";
import { getProfessionals } from "../controllers/professionalController.js";

const proffesionalRoute = express.Router();

proffesionalRoute.get("/", getProfessionals);

export default proffesionalRoute;
