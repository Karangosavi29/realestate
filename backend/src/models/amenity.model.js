import mongoose from "mongoose";

const amenitySchema = new mongoose.Schema(
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
    icon: {
      type: String,
      default: "🏠",
    },
  },
  { timestamps: true }
);

export const Amenity = mongoose.model("Amenity", amenitySchema);