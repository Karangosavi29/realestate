import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Content } from "../models/content.model.js";

// GET /api/content - fetch all content sections
const getAllContent = asyncHandler(async (req, res) => {
  // Step 1: Fetch all content from DB
  const content = await Content.find({});

  // Step 2: Convert array to section-keyed object for easy frontend use
  const contentMap = {};
  content.forEach((item) => {
    contentMap[item.section] = item.data;
  });

  return res.status(200).json(new ApiResponse(200, contentMap, "Content fetched successfully"));
});

// PUT /api/content/:section - update a specific section
const updateContent = asyncHandler(async (req, res) => {
  // Step 1: Get section from params
  const { section } = req.params;

  // Step 2: Get new data from body
  const { data } = req.body;

  // Step 3: Validate
  if (!section) {
    throw new ApiError(400, "Section name is required");
  }
  if (!data) {
    throw new ApiError(400, "Data is required");
  }

  // Step 4: Upsert content (create if not exists, update if exists)
  const updated = await Content.findOneAndUpdate(
    { section },
    { data },
    { new: true, upsert: true }
  );

  return res.status(200).json(new ApiResponse(200, updated, "Content updated successfully"));
});

export { getAllContent, updateContent };