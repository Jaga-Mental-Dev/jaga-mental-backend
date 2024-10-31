"use strict";
import supabase from "../config/supabaseClient.js";

const addUser = async (req, res) => {
  try {
    const {
      full_name,
      email,
      password,
      account_type,
      weight,
      gender,
      location,
    } = req.body;

    const { data, error } = await supabase.from("users").insert([
      {
        full_name,
        email,
        password,
        account_type,
        weight,
        gender,
        location,
      },
    ]);

    if (error) throw new Error(error.message);

    res.send({
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUser = async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw new Error(error.message);

    res.send({
      error: false,
      data,
      message: "User retrieved successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.params.id)
      .single();

    if (error) throw new Error("User not found");

    res.send({
      error: false,
      data,
      message: "User retrieved successfully",
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      full_name,
      email,
      password,
      account_type,
      weight,
      gender,
      location,
    } = req.body;

    const { data: dataUser, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (userError || !dataUser) {
      return res.status(404).send({
        error: true,
        message: "User not found",
      });
    }

    const { data, error } = await supabase
      .from("users")
      .update({
        full_name,
        email,
        password,
        account_type,
        weight,
        gender,
        location,
      })
      .eq("id", id);

    if (error) throw new Error(error.message);

    res.send({
      error: false,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("id", req.params.id);

    if (error) throw new Error("User not found or delete failed");

    res.send({
      error: false,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(404).send({
      error: true,
      message: error.message,
    });
  }
};

export { addUser, getAllUser, getUserById, updateUser, deleteUser };
