const express = require("express");
const UserController = require("../Controllers/user");

const api = express.Router();

api.post("/sign-up", UserController.signUp);

module.exports = api;