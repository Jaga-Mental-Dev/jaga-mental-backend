// src/controllers/userController.js
import * as userService from "../services/userServices.js";

export const addUser = async (req, res, next) => {
  try {
    const data = await userService.addUser(req.body);

    res.send({
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const data = await userService.getAllUsers();

    res.send({
      error: false,
      data,
      message: "User retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const data = await userService.getUserById(req.params.id);

    res.send({
      error: false,
      data,
      message: "User retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    const data = await userService.getUserById(id);

    const dataUser = await userService.updateUser(id, userData);

    res.send({
      error: false,
      data: null,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const data = await userService.deleteUser(req.params.id);

    res.send({
      error: false,
      data: null,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = (req, res) => {
  try {
    const data = userService.getCurrentUser(req);
    res.send({
      error: false,
      data,
      message: "User retrieved successfully",
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
