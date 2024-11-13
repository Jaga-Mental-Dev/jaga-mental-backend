import express from "express";
import {
  createJournal,
  deleteJournal,
  getAllJournalByUserId,
  getJournalByDate,
  getJournalById,
  updateJournal,
} from "../controllers/journalController.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const journalRoute = express.Router();

journalRoute.get("/", getAllJournalByUserId);
journalRoute.get("/:id", getJournalById);
journalRoute.post("/date", getJournalByDate);
journalRoute.post("/", upload.single("image"), createJournal);
journalRoute.put("/:id", updateJournal);
journalRoute.delete("/:id", deleteJournal);

export default journalRoute;
