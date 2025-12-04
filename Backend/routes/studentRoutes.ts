
import express from "express";
import Enrollment from "../models/enrollmentModel";

const router = express.Router();

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

export default router;
