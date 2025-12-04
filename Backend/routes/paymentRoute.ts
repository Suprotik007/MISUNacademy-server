import express from "express";
import Enrollment from "../models/enrollmentModel";

const router = express.Router();

// POST /api/student/enroll
router.post("/enroll", async (req, res) => {
  console.log("Incoming Enrollment Request:", req.body); // <-- log incoming data

  const { userEmail, phone, courseTitle } = req.body;

  if (!userEmail || !phone || !courseTitle) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const enrollment = await Enrollment.create({
      userEmail,
      phone,
      courseTitle,
    });

    console.log("Enrollment saved:", enrollment); // <-- log saved doc

    res.status(201).json({
      message: "Enrollment Saved Successfully",
      data: enrollment,
    });
  } catch (error) {
    console.error("Enrollment save error:", error);
    res.status(500).json({ message: "Enrollment Failed", error });
  }
});

export default router;
