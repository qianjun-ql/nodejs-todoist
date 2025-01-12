import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserModel } from "../models/user";
import { SessionModel } from "../models/session";
