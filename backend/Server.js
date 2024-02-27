/// Importing dependencies ///

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DBURL =
  "mongodb+srv://sibiyabobo:b0b0@cluster0.xe42gpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
/// ROUTES ///

async function connectToDb() {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err);
  }
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data });
});

connectToDb();

// Start our server:
app.listen(3001, () => {
  console.log("Server is listening on port 3000");
});
