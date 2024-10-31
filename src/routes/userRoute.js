import express from "express";
import {
  addUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/create", addUser);
userRoute.put("/update/:id", updateUser);
userRoute.get("/", getAllUser);
userRoute.get("/:id", getUserById);
userRoute.delete("/delete/:id", deleteUser);

export default userRoute;
