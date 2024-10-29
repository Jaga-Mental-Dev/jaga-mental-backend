import express from "express";
import {
  addUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/", addUser);
userRoute.put("/:id", updateUser);
userRoute.get("/", getAllUser);
userRoute.get("/:id", getUserById);
userRoute.delete("/:id", deleteUser);

export default userRoute;
