// src/services/userService.js
import supabase from "../config/supabaseClient.js";
import CustomError from "../utils/CustomError.js";

export const addUser = async (userData) => {
  const { data, error } = await supabase.from("users").insert([userData]);
  if (error) {
    throw new CustomError(error.message, 400);
  }

  return data;
};

export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    throw new CustomError(error.message, 404);
  }

  if (!data) {
    throw new CustomError(error.message, 400);
  }

  return data;
};

export const getUserById = async (userId) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error || !data) {
    throw new CustomError("User not found", 404);
  }

  return data;
};

export const updateUser = async (id, userData) => {
  const { data, error } = await supabase
    .from("users")
    .update(userData)
    .eq("id", id);
  if (error) {
    error.statusCode = 400;
    throw error;
  }

  return data;
};

export const deleteUser = async (id) => {
  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error || !data) {
    throw new CustomError("User not found", 404);
  }

  return data;
};

export const getCurrentUser = (req) => {
  const user = req.user;

  if (!user) {
    throw new CustomError("Unauthorized", 401);
  }

  return user;
};
