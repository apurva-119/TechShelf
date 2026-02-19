import express from "express";
import { signup, login } from "../controller/user.controller.js";
import { forgotPassword, resetPassword } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;