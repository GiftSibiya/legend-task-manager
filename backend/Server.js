const express = require("express");
const mongoose = require("./MongoDb"); // Assuming you named your database connection file as db.js
const cors = require("cors");
const app = express();
const User = require("./models/UsersSchema");
const Task = require("./models/TaskSchema");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await User.create(data);
    }
  } catch (e) {
    res.json("fail");
  }
});
// New route for adding tasks
app.post("/home", async (req, res) => {
  const { taskName, taskDesc, taskStatus, taskDue } = req.body;

  try {
    // Create a new task using the Task model
    const newTask = await Task.create({
      taskName,
      taskDesc,
      taskStatus,
      taskDue,
    });

    console.log("Task added successfully:", newTask);

    res.status(200).json({ message: "Task added successfully", task: newTask });
  } catch (error) {
    console.log(req.body);
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Failed to add task" });
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
