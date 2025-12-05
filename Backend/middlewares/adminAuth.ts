// middleware/adminAuth.ts
import { Request, Response, NextFunction } from "express";
import User from "../models/usersModel";

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { uid } = req.body; // or from headers/token
    if (!uid) return res.status(401).json({ message: "Unauthorized" });

    const user = await User.findOne({ uid });
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
