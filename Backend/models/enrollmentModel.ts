
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  lessonTitle: { type: String, required: true },
  completed: { type: Boolean, default: false },
  assignment: {
    submitted: { type: Boolean, default: false },
    answer: { type: String, default: "" } 
  },
  quiz: {
    submitted: { type: Boolean, default: false },
    score: { type: Number, default: 0 }
  }
});

const enrollmentSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  phone: { type: String, required: true },
  courseTitle: { type: String, required: true },
  paymentDate: { type: Date, default: Date.now },
  progress: [lessonSchema]
});

export default mongoose.model("Enrollment", enrollmentSchema);
