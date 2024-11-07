import supabase from "../config/supabaseClient.js";
import CustomError from "../utils/CustomError.js";

const getEmotionCount = async (from, to, user_id) => {
  const { data, error } = await supabase.rpc("get_emotion_count", {
    from_date: from,
    to_date: to,
    specific_user_id: user_id,
  });

  if (error) {
    throw new CustomError(error.message, 500);
  }

  return data;
};

export { getEmotionCount };
