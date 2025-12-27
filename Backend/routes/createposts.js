import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/create_post", async (req, res) => {
  try {
    const { email, title, platform, createdat, caption, tags } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    user.posts.push({ title, platform, createdat, caption, tags });
    await user.save();

    res.json({ success: true, message: "Post added successfully!", posts: user.posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.get("/get_posts", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (!user) 
      return res.json({ success: false, message: "User not found" });

    res.json({ success: true, posts: user.posts });
  }
   catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
