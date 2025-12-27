import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/myDBClass";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(" MongoDB Connected Successfully");
  } catch (err) {
    console.error(" MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
