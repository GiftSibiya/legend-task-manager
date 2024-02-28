const mongoose = require("../MongoDb");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDesc: {
    type: String,
    required: true,
  },
  taskStatus: {
    type: String,
    enum: ["In Progress", "Pending", "Completed"],
  },
  taskDue: {
    type: Date,
    required: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
