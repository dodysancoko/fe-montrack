const bcrypt = require("bcrypt");
const User = require("../../models/user");
//const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, fullname, password } = req.body;

  // Cek apakah username sudah ada
  const userExist = await User.findOne({ username });
  if (userExist) {
    return res.status(400).json({ message: "Username sudah digunakan" });
  }

  // Enkripsi password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    fullname,
    password: hashedPassword,
  });

  try {
    // Simpan user ke database
    const savedUser = await newUser.save();

    // Kirimkan response sukses
    res.status(201).json({
      message: "User berhasil terdaftar",
      data: {
        username: savedUser.username,
        fullname: savedUser.fullname,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan, silakan coba lagi" });
  }
};

module.exports = { registerUser };
