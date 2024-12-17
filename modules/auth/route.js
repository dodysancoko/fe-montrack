const express = require("express");
const { loginUser } = require("./controllerLogin");
const { registerUser } = require("./controllerRegister");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

module.exports = authRouter;
