const express = require("express");
const Route = express.Router();

const UserRoute = require("../modules/user/route");
const TransRouter = require("../modules/transaksi/route");

Route.use("/user", UserRoute);
Route.use("/transaction", TransRouter);

module.exports = Route;
