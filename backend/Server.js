// Importing dependencies
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routes = require("./routers/userRoutes.js");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err);
  }
}

// Use the routes
app.use("/", routes);

connectToDb();

// Start our server:

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
