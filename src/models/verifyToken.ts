import mongoose from "mongoose";

const VerifyTokenSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

export const VerifyTokenModel = mongoose.model(
  "VerificationToken",
  VerifyTokenSchema
);
