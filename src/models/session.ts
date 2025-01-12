import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  expires: { type: Date, required: true },
  sessionToken: { type: String, required: true, unique: true },
});

export const SessionModel = mongoose.model("Session", SessionSchema);
