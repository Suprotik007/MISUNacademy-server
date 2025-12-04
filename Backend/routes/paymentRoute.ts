import express from "express";
import Enrollment from "../models/enrollmentModel";
import Course from "../models/Courses"; 

const router = express.Router();

router.post("/enroll", async (req, res) => {
  try {
    const { userEmail, phone, courseTitle } = req.body;

    // Find the course to get syllabus
    const course = await Course.findOne({ title: courseTitle });
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Initialize progress array
    const progress = course.syllabus.map((lesson: { title: string }) => ({
      lessonTitle: lesson.title,
      completed: false,
    }));

    const saved = await Enrollment.create({
      userEmail,
      phone,
      courseTitle,
      progress,
    });

    console.log("Enrollment saved:", saved);

    res.status(201).json({
      message: "Enrollment Saved",
      data: saved,
    });
  } catch (error) {
    console.error("Enrollment error:", error);
    res.status(500).json({ message: "Enrollment Failed" });
  }
});

export default router;
