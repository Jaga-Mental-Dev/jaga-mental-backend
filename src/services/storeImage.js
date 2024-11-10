import { Storage } from "@google-cloud/storage";
import CustomError from "../utils/CustomError.js";

const storage = new Storage();
const bucketName = process.env.BUCKET_NAME;

async function uploadImageToGCS(imageFile, firebaseId) {
  const bucket = storage.bucket(bucketName);
  const destination = `${firebaseId}/${Date.now()}_${imageFile.originalname}`;

  const options = {
    destination,
    metadata: {
      contentType: imageFile.mimetype,
      metadata: {
        firebaseId,
      },
    },
  };

  try {
    console.log(image);

    const file = bucket.file(destination);

    await file.save(imageFile.buffer, options);

    return `https://storage.googleapis.com/${bucketName}/${destination}`;
  } catch (error) {
    throw new CustomError(error.message, 500);
  }
}

export default uploadImageToGCS;
