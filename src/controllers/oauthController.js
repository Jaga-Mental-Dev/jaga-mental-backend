import CustomError from "../utils/CustomError.js";
import * as userService from "../services/userServices.js";
import bcrypt from "bcrypt";
import { auth } from "../auth.js";
import { registerOauthUser } from "../services/oauthService.js";

export const oauth = async (req, res, next) => {
  try {
    const reqUser = req.user;

    let currentUser = await userService.getUserByEmail(reqUser.email);

    if (!currentUser) {
      currentUser = await registerOauthUser(reqUser);
    }

    return res.status(200).json({
      user: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
