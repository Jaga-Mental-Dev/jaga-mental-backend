import axios from "axios";
import CustomError from "../utils/CustomError.js";
import FormData from "form-data";

const getEmotionByText = async (text) => {
  try {
    const form = new FormData();
    form.append("text", text); // Menambahkan field "text" ke dalam form

    // Mengirim request dengan axios
    const response = await axios.post(
      process.env.BASE_MODEL_URL + "/text/api/emotion", // URL backend Python
      form, // Form data sebagai body
      {
        headers: {
          ...form.getHeaders(), // Header yang sesuai dengan form-data
        },
      }
    );

    return response.data.label;
  } catch (error) {
    console.error("Error fetching emotion prediction:", error);
    throw new CustomError(error.message, 500);
  }
};

const getEmotionByImage = async (imageFile) => {
  try {
    const form = new FormData();

    // Tambahkan file langsung dari buffer
    form.append("file", imageFile.buffer, imageFile.originalname);

    // Kirim request ke model backend
    const response = await axios.post(
      process.env.BASE_MODEL_URL + "/image/api/imageclassification", // Endpoint backend untuk gambar
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    );

    return response.data.result.label;
  } catch (error) {
    console.error("Error fetching emotion prediction:", error);
    throw new CustomError(error.message, 500);
  }
};

export { getEmotionByText, getEmotionByImage };
