import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  image: { type: String },
  emailVerified: { type: Date },
});

export const UserModel = mongoose.model("User", UserSchema);
