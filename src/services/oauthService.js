import CustomError from "../utils/CustomError.js";
import { auth } from "../auth.js";
import supabase from "../config/supabaseClient.js";

export const registerOauthUser = async (reqUser) => {
  const { user_id, picture, name, email } = reqUser;

  const newUser = {
    firebase_id: user_id,
    full_name: name,
    email,
    avatar: picture,
  };

  const { error } = await supabase.from("users").insert([newUser]);

  if (error) {
    throw new CustomError(error.message, 400);
  }

  return newUser;
};
