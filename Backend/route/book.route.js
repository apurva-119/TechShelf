import express from "express";
import { getBook } from "../controller/book.controller.js";
import { upload } from "../middleware/upload.js";
import { authenticateUser } from "../middleware/auth.js";
import { addBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);


router.post(
  "/add",
  authenticateUser,
  upload.fields([
    { name: "pdf", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  addBook
);

export default router;