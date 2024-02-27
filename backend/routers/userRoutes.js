/// IMPORTS ///

const User = require("../models/Users.js");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

/// REGISTRATION ROUTES ///
router.post("/register", async (req, res) => {
  const password = req.body.password;
  let user = await User.findOne({ email: req.body.email });

  if (!password || typeof password !== "string") {
    return res.status(400).send("Invalid password");
  }

  if (user) {
    return res.send("RegEmailExist");
  } else {
    // Note: Change this to "newUser" (previously "new User")
    return res.send("newUser");
  }
});
/// LOGIN SECTION ///
router.post("/Login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // Note: Change this to res.json({ user: "exists" })
    res.json({ user: "exists" });
    if (bcrypt.compare(req.body.password, user.password)) {
      return res.send({
        _id: user._id,
        name: user.name,
      });
    }
  } else {
    // Note: Change this to res.json({ user: "notexist" })
    res.json({ user: "notexist" });
  }
});
module.exports = router;
