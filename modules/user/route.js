const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./controller");

const UserRoute = express.Router();

// Mendapatkan semua user
UserRoute.get("/", getAllUsers);

// Mendapatkan user berdasarkan ID
UserRoute.get("/:id", getUserById);

// Menambahkan user baru
UserRoute.post("/", createUser);

// Mengupdate user berdasarkan ID
UserRoute.put("/:id", updateUser);

// Menghapus user berdasarkan ID
UserRoute.delete("/:id", deleteUser);

module.exports = UserRoute;
