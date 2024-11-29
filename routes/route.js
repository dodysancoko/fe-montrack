const express = require("express")
const UserRoute = require("../modules/user/route")

const Route = express.Router()

Route.use("/user", UserRoute)
module.exports = Route
