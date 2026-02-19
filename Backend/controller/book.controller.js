import cloudinary from "../config/cloudinary.js";
import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addBook = async (req, res) => {
  try {

    console.log("FILES:", req.files);
    console.log("BODY:", req.body);

    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });

    }

    if (!req.files || !req.files.pdf || !req.files.image) {
      return res.status(400).json({ message: "PDF or Image file missing" });
    }

    const { name, title, price, category } = req.body;

    console.log("Uploading PDF...");
    const pdfUpload = await cloudinary.uploader.upload(
      req.files.pdf[0].path,
      { resource_type: "raw" }
    );

    console.log("Uploading Image...");
    const imageUpload = await cloudinary.uploader.upload(
      req.files.image[0].path
    );

    const book = new Book({
      name,
      title,
      price,
      category,
      image: imageUpload.secure_url,
      pdfUrl: pdfUpload.secure_url,
    });

    await book.save();

    res.status(201).json({ message: "Book added successfully", book });

  } catch (err) {
    console.error("ADD BOOK ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};