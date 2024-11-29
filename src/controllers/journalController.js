import * as journalService from "../services/journalService.js";
import { getEmotionByImage } from "../services/modelServices.js";

const createJournal = async (req, res, next) => {
  try {
    const id = req.user.user_id;
    const data = {
      image: req.file,
      ...req.body,
    };

    const emotion = await getEmotionByImage(data.image);

    const journalData = await journalService.createJournal(id, data);

    res.send({
      error: false,
      data: { ...journalData[0], initialEmotion: emotion },
      message: "Journal created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllJournalByUserId = async (req, res, next) => {
  try {
    const id = req.user.user_id;
    const { emotion, title, content } = req.query;
    const data = await journalService.getAllJournalByUserId(id, {
      emotion,
      title,
      content,
    });

    res.send({
      error: false,
      data,
      message: "Journal retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getJournalById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await journalService.getJournalById(id);

    res.send({
      error: false,
      data,
      message: "Journal retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getJournalByDate = async (req, res, next) => {
  try {
    const id = req.user.user_id;
    const { date } = req.body;
    const data = await journalService.getJournalByDate(id, date);

    res.send({
      error: false,
      data,
      message: "Journal retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

const updateJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const dataJournalUpdate = await journalService.updateJournal(id, data);

    res.send({
      error: false,
      data: dataJournalUpdate[0],
      message: "Journal updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    await journalService.deleteJournal(id);

    res.send({
      error: false,
      message: "Journal delete successfully",
    });
  } catch (error) {
    next(error);
  }
};

export {
  createJournal,
  getAllJournalByUserId,
  getJournalById,
  updateJournal,
  deleteJournal,
  getJournalByDate,
};
