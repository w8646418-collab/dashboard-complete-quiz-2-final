import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.put("/update_scheduledpost", async (req, res) => {
  try {
    const { email, index, content, platforms, date, time  } = req.body;

    const user = await User.findOne({ email });
    if (!user) 
      return res.json({ success: false, message: "User not found" });

    if (!user.scheduledpost[index]) 
      return res.json({ success: false, message: "Scheduled Post not found" });

    user.scheduledpost[index] = { content, platforms, date, time };
    await user.save();

    res.json({ success: true, message: "Scheduled Post updated!", scheduledpost: user.scheduledpost });
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;