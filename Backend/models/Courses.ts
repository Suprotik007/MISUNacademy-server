import mongoose, { Schema, model } from "mongoose";



const syllabusSchema = new mongoose.Schema({
  title: String,
  videoUrl: String
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  price: Number,
  category: String,
  tags: [String],
  syllabus: [String]
}, { timestamps: true });

export default mongoose.model("Course", CourseSchema);



