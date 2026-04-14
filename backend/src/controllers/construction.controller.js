import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Construction } from "../models/construction.model.js";

// GET /api/construction
const getAllUpdates = asyncHandler(async (req, res) => {
  const updates = await Construction.find({}).sort({ createdAt: -1 });
  return res.status(200).json(new ApiResponse(200, updates, "Construction updates fetched"));
});

// POST /api/construction
const createUpdate = asyncHandler(async (req, res) => {
  const { title, description, date, imageUrl, progress } = req.body;

  if (!title || !date) {
    throw new ApiError(400, "Title and date are required");
  }

  const update = await Construction.create({ title, description, date, imageUrl, progress });
  return res.status(201).json(new ApiResponse(201, update, "Construction update created"));
});

// PUT /api/construction/:id
const updateUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, date, imageUrl, progress } = req.body;

  if (!title || !date) {
    throw new ApiError(400, "Title and date are required");
  }

  const update = await Construction.findByIdAndUpdate(
    id,
    { title, description, date, imageUrl, progress },
    { new: true }
  );

  if (!update) {
    throw new ApiError(404, "Construction update not found");
  }

  return res.status(200).json(new ApiResponse(200, update, "Construction update updated"));
});

// DELETE /api/construction/:id
const deleteUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const update = await Construction.findByIdAndDelete(id);

  if (!update) {
    throw new ApiError(404, "Construction update not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "Construction update deleted"));
});

export { getAllUpdates, createUpdate, updateUpdate, deleteUpdate };