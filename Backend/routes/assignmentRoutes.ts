import express from "express";
import Assignment from "../models/AssignmentModels";

const router = express.Router();


router.post("/submit", async (req, res) => {
  try {
    const { courseId, courseTitle, lessonId, lessonTitle, link, userEmail, userName } = req.body;

    if (!courseId || !lessonId || !link || !userEmail || !courseTitle || !lessonTitle) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const assignment = await Assignment.create({
      courseId,
      courseTitle,
      lessonId,
      lessonTitle,
      link,
      userEmail,
      userName,
      submittedAt: new Date(),
    });

    return res.status(201).json({ message: "Assignment submitted", assignment });
  } 
  catch (err) {
    console.log("Assignment Error:", err);
    return res.status(500).json({ message: "Server Error" });
  }
});

export default router;
