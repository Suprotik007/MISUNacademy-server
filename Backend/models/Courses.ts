import mongoose, { Schema, model } from "mongoose";


const syllabusSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true }
});


const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  syllabus: [syllabusSchema]
});

const Course = model("Course", courseSchema);

export default Course;
