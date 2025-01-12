import express from "express";
import { register, login } from "../controllers/auth";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;
