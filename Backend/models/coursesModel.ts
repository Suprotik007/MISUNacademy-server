// models/CourseModel.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,

  enrollments: [
    {
      studentName: String,
      studentEmail: String,
      date: { type: Date, default: Date.now },
    }
  ],

  assignments: [
    {
      title: String,
      description: String,
      dueDate: Date,
      submittedBy: [
        {
          studentEmail: String,
          fileUrl: String,
          submittedAt: { type: Date, default: Date.now }
        }
      ]
    }
  ],
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
