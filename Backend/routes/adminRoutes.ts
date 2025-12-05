import express from "express";
import Enrollment from "../models/enrollmentModel"; 
import Assignment from "../models/AssignmentModels";

const router = express.Router();

// Get enrollments by course
router.get("/enrollments/course/:id", async (req, res) => {
  try {
    const data = await Enrollment.find({ courseId: req.params.id })
      .populate("userId", "name email"); 
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get assignments by course
router.get("/assignments/course/:id", async (req, res) => {
  try {
    const data = await Assignment.find({ courseId: req.params.id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
