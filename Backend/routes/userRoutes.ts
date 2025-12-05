import express from "express";
import User from "../models/usersModel";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { name, email, photo } = req.body;

    if (!email) return res.status(400).json({ message: "Email required" });

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, photo });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});



router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
