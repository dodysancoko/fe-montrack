const Transaction = require("../../models/Transaction"); // Model transaksi
const User = require("../../models/user");

exports.createTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, time, description, userId } =
      req.body;

    // Pastikan userId ada dalam request body
    if (!userId) {
      return res.status(400).json({
        message: "userId tidak ditemukan dalam request.",
      });
    }

    // Format waktu
    const transactionDate = new Date(`${date}T${time}`);

    // Buat transaksi baru
    const newTransaction = new Transaction({
      type,
      category,
      amount,
      date: transactionDate,
      description,
      userId,
    });

    await newTransaction.save();

    res.status(201).json({
      success: true,
      message: "Transaksi berhasil ditambahkan",
      data: newTransaction,
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat menambahkan transaksi",
      error: error.message,
    });
  }
};

// Tambah Transaksi
exports.addTransaction = async (req, res) => {
  try {
    const { amount, date, time, category, description } = req.body;

    // Buat transaksi baru
    const transaction = new Transaction({
      amount,
      date,
      time,
      category,
      description,
    });
    await transaction.save();

    res
      .status(201)
      .json({ message: "Transaksi berhasil ditambahkan", transaction });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan", error: error.message });
  }
};

// Ambil Semua Transaksi
exports.getAllTransactions = async (req, res) => {
  try {
    // Ambil semua transaksi dari database
    const transactions = await Transaction.find();

    // Kirimkan response sukses dengan data transaksi
    res.status(200).json({
      success: true,
      message: "Berhasil mengambil semua transaksi",
      data: transactions,
    });
  } catch (error) {
    // Kirimkan response error jika ada kesalahan
    console.error("Error fetching transactions:", error);
    res.status(500).json({
      success: false,
      message: "Gagal mengambil transaksi",
      error: error.message,
    });
  }
};

// Ambil Semua Transaksi Milik User
exports.getUserTransactions = async (req, res) => {
  try {
    const { userId } = req.params; // Ambil userId dari parameter URL

    // Cari transaksi yang terkait dengan userId
    const transactions = await Transaction.find({ userId }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      message: "Transaksi berhasil diambil",
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat mengambil transaksi",
      error: error.message,
    });
  }
};

// Hapus Transaksi Berdasarkan ID
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }

    res.status(200).json({ message: "Transaksi berhasil dihapus" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan", error: error.message });
  }
};
