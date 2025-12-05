import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  photo: String,
  role: { type: String, default: "student" }, 
  createdAt: { type: Date, default: Date.now }
});
 
export default mongoose.model("User", userSchema);
