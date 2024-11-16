import supabase from "../config/supabaseClient.js";
import CustomError from "../utils/CustomError.js";
import { uploadImageToGCS, deleteImageFromGCS } from "./cloudStorageService.js";
import { startOfDay, endOfDay, formatISO } from "date-fns";

const createJournal = async (firebase_id, data) => {
  const { image, ...journalData } = data;

  if (image) {
    try {
      const imageUrl = await uploadImageToGCS(image, firebase_id);
      journalData.imageUrl = imageUrl;
    } catch (uploadError) {
      throw new CustomError(uploadError.message, 500);
    }
  }

  const { data: insertedData, error } = await supabase
    .from("journals")
    .insert({ user_id: firebase_id, ...journalData })
    .select();

  if (error) {
    throw new CustomError(error.message, 500);
  }

  return insertedData;
};

const getAllJournalByUserId = async (firebase_id, filters = {}) => {
  let query = supabase.from("journals").select("*").eq("user_id", firebase_id);

  if (filters.emotion) {
    query = query.eq("emotion", filters.emotion);
  }
  if (filters.title) {
    query = query.ilike("title", `%${filters.title}%`);
  }
  if (filters.content) {
    query = query.ilike("content", `%${filters.content}%`);
  }

  const { data, error } = await query;

  if (error || !data) {
    throw new CustomError("Journal not found", 404);
  }

  return data;
};

const getJournalById = async (journalId) => {
  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .eq("id", journalId)
    .single();

  if (error || !data) {
    throw new CustomError("Journal not found", 404);
  }

  return data;
};

const getJournalByDate = async (userId, date) => {
  const inputDate = new Date(date);

  const startOfDayISO = formatISO(startOfDay(inputDate));
  const endOfDayISO = formatISO(endOfDay(inputDate));

  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .eq("user_id", userId)
    .gte("created_at", startOfDayISO)
    .lte("created_at", endOfDayISO);

  if (error || !data) {
    throw new CustomError("Journal not found", 404);
  }

  return data;
};

const updateJournal = async (journalId, data) => {
  await getJournalById(journalId);

  const { error } = await supabase
    .from("journals")
    .update(data)
    .eq("id", journalId);

  if (error) {
    throw new CustomError(error.message, 500);
  }

  return data;
};

const deleteJournal = async (journalId) => {
  const journal = await getJournalById(journalId);

  await deleteImageFromGCS(journal.imageUrl);

  const { data, error } = await supabase
    .from("journals")
    .delete()
    .eq("id", journalId);

  if (error) {
    throw new CustomError("Error deleting data, Try Again", 500);
  }

  return data;
};

export {
  createJournal,
  getAllJournalByUserId,
  getJournalById,
  deleteJournal,
  updateJournal,
  getJournalByDate,
};
