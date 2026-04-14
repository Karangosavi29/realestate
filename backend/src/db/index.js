import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // connect to mongodb using env variable
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);

    console.log(
      `MongoDB connected successfully! Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;