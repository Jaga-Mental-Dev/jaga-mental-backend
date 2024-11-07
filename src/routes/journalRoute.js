import express from "express";
import {
  createJournal,
  deleteJournal,
  getAllJournalByUserId,
  getJournalById,
  updateJournal,
} from "../controllers/journalController.js";

const journalRoute = express.Router();

journalRoute.get("/", getAllJournalByUserId);
journalRoute.get("/:id", getJournalById);
journalRoute.post("/", createJournal);
journalRoute.put("/:id", updateJournal);
journalRoute.delete("/:id", deleteJournal);

export default journalRoute;
