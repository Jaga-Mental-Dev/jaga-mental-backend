import { auth } from "../auth.js";

export const verifyGoogleToken = async (token) => {
  try {
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};
