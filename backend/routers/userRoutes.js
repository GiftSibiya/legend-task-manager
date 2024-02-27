/// IMPORTS ///

const User = require("../models/Users.js");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const password = req.body.password;
  let user = await User.findOne({ email: req.body.email });

  if (!password || typeof password !== "string") {
    return res.status(400).send("Invalid password");
  }

  if (user) return res.send("This email is already in use");

  user = await new User({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(password, 10),
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
