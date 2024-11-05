import CustomError from "../utils/CustomError.js";
import * as userService from "../services/userServices.js";
import * as authService from "../services/authService.js";
import { loginSchema, registerSchema } from "../validations/authValidation.js";
import bcrypt from "bcrypt";
import { auth } from "../auth.js";

export const registration = async (req, res, next) => {
  try {
    //validate payload
    const { error } = registerSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const { full_name, email, password } = req.body;

    await authService.registerUser(full_name, email, password);

    await res.status(201).json({
      error: false,
      message: "user registered successfully",
      data: {
        full_name,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    // Validate payload
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const { email, password } = req.body;

    const idToken = await authService.loginUser(email, password);

    res.status(200).json({
      error: false,
      message: "Login successful",
      idToken,
    });
  } catch (error) {
    next(error);
  }
};
