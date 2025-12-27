import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  platform: { type: String, default: "" },
  createdat: { type: String, default: "" },
  caption: { type: String, default: ""},
  tags: { type: String, deafult: ""}
});

const ScheduledSchema = new mongoose.Schema({
  content: { type: String, default: ""   },
  platforms: { type: [String], default: []},
  date: { type: String, default: ""  },
  time: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Scheduled" }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  password: { type: String, required: true },
  posts: [postSchema],
  scheduledpost: [ScheduledSchema]
});

export default mongoose.model("users", userSchema);
