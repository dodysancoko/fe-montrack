const express = require("express");
const UserController = require("./controller");

const UserRoute = express.Router();

UserRoute.get(
  "/",
  (req, res, next) => {
    console.log("testing");
    next();
  },
  UserController.getAll
);

UserRoute.post("/", (req, res) => {
  console.log(req.query);
  return res.status(200).send("OK2");
});

UserRoute.delete("/", (req, res) => {
  console.log(req.query);
  return res.status(200).send("OK3");
});

UserRoute.patch("/", (req, res) => {
  console.log(req.query);
  return res.status(200).send("OK4");
});

module.exports = UserRoute;
