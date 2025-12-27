import express from "express";
import User from "../models/User.js";
import sanitizeInput from "../utils/sanitizeInput.js";
import regEmailTest from "../utils/regEmailTest.js";
import isAlphabetOnly from "../utils/isAlphabetOnly.js";
import charLength from "../utils/charLength.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    name = sanitizeInput(name);
    email = sanitizeInput(email);
    password = sanitizeInput(password);

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (regEmailTest(email) === 0) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (isAlphabetOnly(name) === 0) {
      return res.status(400).json({ message: "Name should contain only letters." });
    }
    if (charLength(name, 6, 35) === 0) {
      return res.status(400).json({ message: "Name must be 6–35 characters long." });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const user = new User({ name, email, password });
    await user.save();

    return res.status(201).json({
      message: "User Registered Successfully!",
      user: { name, email },
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
