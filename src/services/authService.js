import bcrypt from "bcrypt";
import CustomError from "../utils/CustomError.js";
import { addUser, getUserByEmail } from "./userServices.js";
import { auth } from "../auth.js";

export const registerUser = async (full_name, email, password) => {
  // validate if user found
  const foundUser = await getUserByEmail(email);

  if (foundUser) {
    throw new CustomError("User already registered", 409);
  }

  // hash password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = {
    full_name,
    email,
    password: hashedPassword,
  };

  return await addUser(newUser);
};

export const loginUser = async (email, password) => {
  // Validate if user found
  const user = await getUserByEmail(email);
  if (!user) {
    throw new CustomError("Invalid email or password", 401);
  }

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new CustomError("Invalid email or password", 401);
  }

  const idToken = await auth.createCustomToken(user.id);
  return idToken;
};
