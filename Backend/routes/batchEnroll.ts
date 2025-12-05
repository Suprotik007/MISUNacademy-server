import express from "express";
import Enrollment from "../models/enrollmentModel";
import { adminAuth } from "../middlewares/adminAuth";

const router = express.Router();

// Get all students in a course or batch
router.get("/course/:courseId", adminAuth, async (req, res) => {
  try {
    const { courseId } = req.params;
    const enrollments = await Enrollment.find({ courseId }).populate("userId"); 
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch enrollments" });
  }
});

router.get("/batch/:batchName", adminAuth, async (req, res) => {
  try {
    const { batchName } = req.params;
    const enrollments = await Enrollment.find({ batch: batchName }).populate("userId");
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch enrollments" });
  }
});

export default router;
