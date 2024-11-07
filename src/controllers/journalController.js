import * as journalService from "../services/journalService.js";

const createJournal = async (req, res, next) => {
  try {
    const id = req.user.id;
    await journalService.createJournal(id, req.body);

    res.send({
      error: false,
      message: "Journal created successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllJournalByUserId = async (req, res, next) => {
  try {
    const id = "asdadassdasdasd";
    const data = await journalService.getAllJournalByUserId(id);

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

const updateJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await journalService.updateJournal(id, data);

    res.send({
      error: false,
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
};
