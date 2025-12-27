import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/get_profile", verifyToken, async (req, res) => {
  try {
    const userEmail = req.user.email; 

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userData = {
      name: user.name,
      email: user.email,
    };

    console.log(" User data fetched:", userData);

    res.json({
      message: "OK",
      userData,
    });
  } catch (error) {
    console.error(" Error fetching user profile:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
