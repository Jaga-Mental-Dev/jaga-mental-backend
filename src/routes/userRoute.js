import express from "express";
import {
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/me", getCurrentUser);
userRoute.put("/:id", updateUser);
userRoute.get("/", getAllUsers);
userRoute.get("/:id", getUserById);
userRoute.delete("/:id", deleteUser);

export default userRoute;
