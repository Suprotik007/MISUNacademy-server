

import express from "express";
const router = express.Router();


router.get('/users/:email', async (req, res) => {
    try {
        const email = decodeURIComponent(req.params.email);
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (err) {
        console.error("User fetch error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;