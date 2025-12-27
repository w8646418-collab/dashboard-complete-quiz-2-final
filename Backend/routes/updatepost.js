import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.put("/update_post", async (req, res) => {
  try {
    const { email, index, title, platform, createdat, caption, tags } = req.body;

    const user = await User.findOne({ email });
    if (!user) 
      return res.json({ success: false, message: "User not found" });

    if (!user.posts[index]) 
      return res.json({ success: false, message: "Post not found" });

    user.posts[index] = { title, platform, createdat, caption, tags };
    await user.save();

    res.json({ success: true, message: "Post updated!", posts: user.posts });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;