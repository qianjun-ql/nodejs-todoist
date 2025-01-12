import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sessionToken: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

export const SessionModel = mongoose.model("Session", SessionSchema);
