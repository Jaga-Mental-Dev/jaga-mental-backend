import supabase from "../config/supabaseClient.js";
import CustomError from "../utils/CustomError.js";
<<<<<<< HEAD

const getEmotionCount = async (from, to, user_id) => {
  const { data, error } = await supabase.rpc("get_emotion_count", {
    from_date: from,
    to_date: to,
    specific_user_id: user_id,
  });
=======
import { parseISO, getDay, startOfWeek, endOfWeek, format } from "date-fns";

const getEmotionCount = async (user_id) => {
  if (!user_id) {
    throw new CustomError("User ID is required", 400);
  }

  const now = new Date();
  const startOfMonday = startOfWeek(now, { weekStartsOn: 1 });
  const endOfSunday = endOfWeek(now, { weekStartsOn: 1 });

  const startDate = format(startOfMonday, "yyyy-MM-dd'T'00:00:00'Z'");
  const endDate = format(endOfSunday, "yyyy-MM-dd'T'23:59:59'Z'");

  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .gte("created_at", startDate)
    .lte("created_at", endDate)
    .eq("user_id", user_id);
>>>>>>> dev

  if (error) {
    throw new CustomError(error.message, 500);
  }

<<<<<<< HEAD
  return data;
};

export { getEmotionCount };
=======
  const transformedData = transformData(data);

  return transformedData;
};

const transformData = (data) => {
  const defaultEmotions = ["neutral", "happy", "angry", "sad"];

  const result = defaultEmotions.reduce((acc, emotion) => {
    acc[emotion] = Array(7).fill(0);
    return acc;
  }, {});

  data.forEach((journal) => {
    const { emotion, created_at } = journal;

    const date = parseISO(created_at);
    const dayIndex = getDay(date);

    const adjustedDayIndex = dayIndex === 0 ? 6 : dayIndex - 1;

    if (result[emotion]) {
      result[emotion][adjustedDayIndex]++;
    }
  });

  return result;
};

export { getEmotionCount, transformData };
>>>>>>> dev
