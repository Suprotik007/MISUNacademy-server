import express from "express";
import Course from "../models/coursesModel";
import { adminAuth } from "../middlewares/adminAuth";

const router = express.Router();

// Create course
router.post("/", adminAuth, async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to create course" });
  }
});

// Read all courses
router.get("/", adminAuth, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});

// Update course
router.put("/:id", adminAuth, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to update course" });
  }
});

// Delete course
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete course" });
  }
});

export default router;
