import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";
import { User } from "../models/user.model.js";
const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    await User.create({
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    });

    console.log("Admin created successfully ");
    process.exit();
  } catch (error) {
    console.log("Error creating admin:", error);
    process.exit(1);
  }
};
console.log("MONGO URI:", process.env.MONGODB_URL);

createAdmin();