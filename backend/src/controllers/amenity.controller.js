import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Amenity } from "../models/amenity.model.js";

// GET /api/amenities
const getAllAmenities = asyncHandler(async (req, res) => {
  const amenities = await Amenity.find({}).sort({ createdAt: 1 });
  return res.status(200).json(new ApiResponse(200, amenities, "Amenities fetched successfully"));
});

// POST /api/amenities
const createAmenity = asyncHandler(async (req, res) => {
  // Step 1: Destructure body
  const { title, description, icon } = req.body;

  // Step 2: Validate
  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  // Step 3: Create
  const amenity = await Amenity.create({ title, description, icon });

  return res.status(201).json(new ApiResponse(201, amenity, "Amenity created successfully"));
});

// PUT /api/amenities/:id
const updateAmenity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, icon } = req.body;

  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const amenity = await Amenity.findByIdAndUpdate(
    id,
    { title, description, icon },
    { new: true }
  );

  if (!amenity) {
    throw new ApiError(404, "Amenity not found");
  }

  return res.status(200).json(new ApiResponse(200, amenity, "Amenity updated successfully"));
});

// DELETE /api/amenities/:id
const deleteAmenity = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const amenity = await Amenity.findByIdAndDelete(id);

  if (!amenity) {
    throw new ApiError(404, "Amenity not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "Amenity deleted successfully"));
});

export { getAllAmenities, createAmenity, updateAmenity, deleteAmenity };