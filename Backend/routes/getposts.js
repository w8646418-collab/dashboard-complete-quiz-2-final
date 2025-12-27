import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET all posts for a user
router.get("/allposts/:userId", async (req, res) => {
  try {
    const user = await User.findByemail(req.params.user.email);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ posts: user.posts });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
