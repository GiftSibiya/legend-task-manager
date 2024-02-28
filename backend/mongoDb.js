const Mongoose = require("mongoose");
require("dotenv").config();

Mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

module.exports = Mongoose;
