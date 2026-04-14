import mongoose from "mongoose";

const constructionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    date: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Construction = mongoose.model("Construction", constructionSchema);