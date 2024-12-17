const User = require("../../models/user");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validasi input
    if (!username || !password) {
      return res.status(400).send({
        message: "Nama pengguna dan kata sandi diperlukan.",
      });
    }

    // Cek apakah user dengan username tersebut ada
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Nama pengguna tidak ditemukan" });
    }

    // Bandingkan password yang diinputkan dengan password yang di-hash di database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Kata sandi salah" });
    }

    // Jika login berhasil, kirimkan response sukses
    res.status(200).json({
      message: "Login berhasil",
      user: {
        id: user._id,
        fullname: user.fullname,
        username: user.username,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { loginUser };
