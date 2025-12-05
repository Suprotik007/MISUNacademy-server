import express from "express";
import Assignment from "../models/AssignmentModels";
import { adminAuth } from "../middlewares/adminAuth";

const router = express.Router();

// Get all assignments for a course
router.get("/course/:courseId", adminAuth, async (req, res) => {
  try {
    const { courseId } = req.params;
    if (!courseId) {
      return res.status(400).json({ message: "Course ID parameter is required" });
    }
    const assignments = await Assignment.find({ courseId });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch assignments" });
  }
});

// Get all assignments for a student
router.get("/student/:email", adminAuth, async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(400).json({ message: "Email parameter is required" });
    }
    const assignments = await Assignment.find({ userEmail: email });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch assignments" });
  }
});

export default router;
