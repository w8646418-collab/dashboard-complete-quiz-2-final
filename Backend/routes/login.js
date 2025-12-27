import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sanitizeInput from "../utils/sanitizeInput.js";
import regEmailTest from "../utils/regEmailTest.js";
import charLength from "../utils/charLength.js";

const router = express.Router();

const JWT_SECRET = "mySuperSecretKey_12345";

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    email = sanitizeInput(email);
    password = sanitizeInput(password);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    if (regEmailTest(email) === 0) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (charLength(password, 6, 35) === 0) {
      return res
        .status(400)
        .json({ message: "Password must be between 6 to 35 characters." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found. Please register first." });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const payload = { name: user.name, email: user.email, userType: "user" };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login successful!",
      user: { name: user.name, email: user.email },
      token,
    });
  } 
  catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
