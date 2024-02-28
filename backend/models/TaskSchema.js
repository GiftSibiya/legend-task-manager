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
  status: {
    type: String,
    enum: ["In Progress", "Pending", "Completed"],
  },
  due: {
    type: Date,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
