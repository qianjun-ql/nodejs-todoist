import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized" }); // Send the response without returning
    return; // Stop execution here
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; // Attach the decoded user to the request object
    next(); // Proceed to the next middleware
  } catch (err) {
    res.status(401).json({ message: "Invalid token" }); // Send the response without returning
  }
};
