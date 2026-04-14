import mongoose from "mongoose";

// Content model stores text content for each section of the website
const contentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      unique: true,
      // e.g. "hero", "about", "connectivity", "overview"
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      // flexible object to store any section's content
    },
  },
  { timestamps: true }
);

export const Content = mongoose.model("Content", contentSchema);