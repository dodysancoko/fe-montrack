const express = require("express");
const TransRouter = express.Router();
const controllerTrans = require("./controllerTrans");

// POST: untuk membuat transaksi baru
TransRouter.post("/", controllerTrans.createTransaction);

// POST: Tambahkan transaksi
TransRouter.post("/add", controllerTrans.addTransaction);

// GET: Ambil semua transaksi
TransRouter.get("/", controllerTrans.getAllTransactions);

// GET: Ambil semua transaksi berdasarkan userId
TransRouter.get("/:userId", controllerTrans.getUserTransactions);

// Hapus transaksi berdasarkan ID
TransRouter.delete("/:id", controllerTrans.deleteTransaction);

module.exports = TransRouter;
