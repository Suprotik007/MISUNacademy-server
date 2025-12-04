
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  phone: { type: String, required: true },
  courseTitle: { type: String, required: true },
  paymentDate: { type: Date, default: Date.now }
});

export default mongoose.model("Enrollment", enrollmentSchema);
