import connectToMango from "./db.js";
import registration from "./routes/registration.js";
import login from "./routes/login.js";
import getProfileRoute from "./routes/get_profile.js";
import createpost from "./routes/createposts.js";
import updatepost from "./routes/updatepost.js";
import deletepost from "./routes/deletepost.js";
// import getPostsRoute from "./routes/getposts.js";
import scheduledpost from "./routes/scheduledpost.js"; // Create + Get
import updateSchedule from "./routes/updatescheduledpost.js";    // Update
import deleteSchedule from "./routes/deletescheduledpost.js";    // Delete

import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectToMango();

// Test route
app.get("/", (req, res) => {
  res.send({ status: "ok", message: "Backend running successfully!" });
});

app.use("/api", registration);
app.use("/api", login);
app.use("/api", getProfileRoute);
app.use("/api", createpost);
app.use("/api", updatepost);
app.use("/api", deletepost);
// app.use("/api/posts", getPostsRoute);
app.use("/api/schedule", scheduledpost); // Create + Get
app.use("/api/schedule", updateSchedule); // Update
app.use("/api/schedule", deleteSchedule); // Delete

app.listen(PORT);
