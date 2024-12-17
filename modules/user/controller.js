const User = require("../../models/user");

// Mendapatkan semua user
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password dari hasil
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error mendapatkan data user", error: error.message });
  }
};

// Mendapatkan user berdasarkan ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error mendapatkan user", error: error.message });
  }
};

// Menambahkan user baru
const createUser = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;

    // Validasi jika username sudah ada
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username sudah digunakan" });
    }

    const newUser = new User({ fullname, username, password });
    await newUser.save();
    res.status(201).json({ message: "User berhasil dibuat", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error membuat user", error: error.message });
  }
};

// Mengupdate user berdasarkan ID
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res
      .status(200)
      .json({ message: "User berhasil diupdate", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error mengupdate user", error: error.message });
  }
};

// Menghapus user berdasarkan ID
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.status(200).json({ message: "User berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error menghapus user", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
