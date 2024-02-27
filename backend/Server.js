/// Importing dependencies ///

const express = require("express");
const app = express();

/// ROUTES ///

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data });
});

// Start our server:
app.listen(3001, () => {
  console.log("Server is listening on port 3000");
});
