const User = require("../models/Users.js");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  // Check if required fields are present in the request body
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send("Missing required fields");
  }

  const user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).save();

  res.send(user);
});

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: `Data received successfully ${data} ` });
});

module.exports = router;
