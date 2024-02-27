import mongoose from "mongoose";

const userSchema = new userSchema.Schema({
  name: {
    type: String,
    requred: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
