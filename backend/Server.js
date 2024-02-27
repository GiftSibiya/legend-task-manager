// Importing dependencies
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routes = require("./routers/userRoutes.js"); // Import your routes file

const app = express();
app.use(cors());
app.use(express.json());

const DBURL =
  "mongodb+srv://sibiyabobo:b0b0@cluster0.xe42gpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
async function connectToDb() {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err);
  }
}

// Use the routes
app.use("/", routes);

connectToDb();

// Start our server:
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
