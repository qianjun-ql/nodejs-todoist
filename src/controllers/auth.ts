import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { SessionModel } from "../models/session";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new UserModel({ email, passwordHash });
  await user.save();

  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
  
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });
  
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
  
    const session = new SessionModel({
      userId: user._id,
      sessionToken: token,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
    await session.save();
  
    res.status(200).json({ token });
  };