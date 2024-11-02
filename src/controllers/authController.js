import CustomError from "../utils/CustomError.js";
import * as userService from "../services/userServices.js";
import { loginSchema, registerSchema } from "../validations/authValidation.js";
import bcrypt from "bcrypt";

export const registration = async (req, res, next) => {
  try {
    //validate payload
    const { error } = registerSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const { full_name, email, password } = req.body;

    // validate if user found
    const foundUser = await userService.getUserByEmail(email);

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

    await userService.addUser(newUser);

    res.status(201).json({
      error: false,
      message: "user registered successfully",
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

    // Validate if user found
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new CustomError("Invalid email or password", 401);
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new CustomError("Invalid email or password", 401);
    }

    res.status(200).json({
      error: false,
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};
