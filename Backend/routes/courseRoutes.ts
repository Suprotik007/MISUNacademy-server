import { Router } from "express";
import Course from "../models/Courses";

const router = Router();

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find(); 
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET course by details
router.get("/:title", async (req, res) => {
  try {
 const courseTitle = decodeURIComponent(req.params.title)

    const course = await Course.findOne({ title: courseTitle });

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch course", error: err });
  }
});




export default router;
