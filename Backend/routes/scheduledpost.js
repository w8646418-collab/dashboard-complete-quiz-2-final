import express from "express";
import User from "../models/User.js";

const router = express.Router();
 
router.post("/create_scheduled", async (req, res) => {
  try {
    const { email, content, platforms, date, time } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    user.scheduledpost.push({ content, platforms, date, time });
    await user.save();

    res.json({ success: true, message: "Post Scheduled successfully!", scheduledpost: user.scheduledpost});
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

router.get("/get_scheduledpost", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });
    if (!user) 
      return res.json({ success: false, message: "User not found" });

    res.json({ success: true, scheduledpost: user.scheduledpost });
  }
   catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
