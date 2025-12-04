import express from "express";
import Enrollment from "../models/enrollmentModel";

const router = express.Router();

// GET all enrollments for a user
router.get("/enrollments/:email", async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const enrollments = await Enrollment.find({ userEmail: email });
    res.status(200).json(enrollments);
  } catch (error) {
    console.error("Fetch enrollments error:", error);
    res.status(500).json({ message: "Failed to fetch enrollments" });
  }
});

// POST a new enrollment
router.post("/enroll", async (req, res) => {
  try {
    const { userEmail, phone, courseTitle, courseId } = req.body;

    const newEnrollment = await Enrollment.create({
      userEmail,
      phone,
      courseTitle,
      courseId,
      progress: [], 
    });

    console.log("Enrollment saved:", newEnrollment);
    res.status(201).json({ message: "Enrollment saved", data: newEnrollment });
  } catch (error) {
    console.error("Enrollment save error:", error);
    res.status(500).json({ message: "Enrollment failed" });
  }
});

// PATCH: Mark a lesson as completed
router.patch("/enrollments/:enrollId/complete", async (req, res) => {
  try {
    const { enrollId } = req.params;
    const { lessonTitle } = req.body;

    const enrollment = await Enrollment.findById(enrollId);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    const lesson = enrollment.progress.find(l => l.lessonTitle === lessonTitle);

    if (lesson) {
      lesson.completed = true;
    } else {
      enrollment.progress.push({ lessonTitle, completed: true });
    }

    await enrollment.save();
    res.status(200).json({ message: "Lesson marked completed", enrollment });
  } catch (error) {
    console.error("Mark lesson error:", error);
    res.status(500).json({ message: "Failed to update progress" });
  }

  // Submit Assignment
router.patch("/enrollments/:enrollId/assignment", async (req, res) => {
  const { enrollId } = req.params;
  const { lessonTitle, answer } = req.body;

  try {
    const enrollment = await Enrollment.findById(enrollId);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    const lesson = enrollment.progress.find(l => l.lessonTitle === lessonTitle);
    if (lesson) {
      lesson.assignment = { submitted: true, answer };
    } else {
      enrollment.progress.push({
        lessonTitle,
        completed: false,
        assignment: { submitted: true, answer }
      });
    }

    await enrollment.save();
    res.json({ message: "Assignment submitted", enrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit assignment" });
  }
});

// Submit Quiz
router.patch("/enrollments/:enrollId/quiz", async (req, res) => {
  const { enrollId } = req.params;
  const { lessonTitle, score } = req.body;

  try {
    const enrollment = await Enrollment.findById(enrollId);
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });

    const lesson = enrollment.progress.find(l => l.lessonTitle === lessonTitle);
    if (lesson) {
      lesson.quiz = { submitted: true, score };
    } else {
      enrollment.progress.push({
        lessonTitle,
        completed: false,
        quiz: { submitted: true, score }
      });
    }

    await enrollment.save();
    res.json({ message: "Quiz submitted", enrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit quiz" });
  }
});
});

export default router;
