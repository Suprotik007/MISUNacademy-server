import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  lessonId: { type: String, required: true },
  link: { type: String, required: true },

  userEmail: { type: String, required: true },
  userName: { type: String, required: true },

  submittedAt: { type: Date, default: Date.now },

  status: { type: String, default: "Pending" },  
  score: { type: Number, default: null }
});

export default mongoose.model("Assignment", assignmentSchema);
