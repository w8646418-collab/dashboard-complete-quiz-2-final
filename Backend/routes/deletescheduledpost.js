import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.delete("/delete_scheduledpost", async (req, res) => {
  try {
    const { email, index } = req.body;

    const user = await User.findOne({ email });
    if (!user) 
      return res.json({ success: false, message: "User not found" });

    if (!user.scheduledpost[index]) 
      return res.json({ success: false, message: "Scheduled Post not found" });

    user.scheduledpost.splice(index, 1);
    await user.save();

    res.json({ success: true, message: "Scheduled Post deleted!", scheduledpost: user.scheduledpost });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;