import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  type: { 
    type: String, 
    required: true, 
    enum: ["email", "oidc", "oauth", "webauthn"]
  },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true }, 
  refresh_token: { type: String }, 
  access_token: { type: String }, 
  expires_at: { type: Date }, 
  token_type: { type: String }, 
  scope: { type: String }, 
  id_token: { type: String }, 
  session_state: { type: String }, 
  createdAt: { type: Date, default: Date.now },
});

export const AccountModel = mongoose.model("Account", AccountSchema);
