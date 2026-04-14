import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { FAQ } from "../models/faq.model.js";

// GET /api/faqs
const getAllFaqs = asyncHandler(async (req, res) => {
  // Step 1: Fetch all FAQs sorted by order
  const faqs = await FAQ.find({}).sort({ order: 1, createdAt: 1 });
  return res.status(200).json(new ApiResponse(200, faqs, "FAQs fetched successfully"));
});

// POST /api/faqs
const createFaq = asyncHandler(async (req, res) => {
  // Step 1: Destructure body
  const { question, answer, order } = req.body;

  // Step 2: Validate
  if (!question || !answer) {
    throw new ApiError(400, "Question and answer are required");
  }

  // Step 3: Create new FAQ
  const faq = await FAQ.create({ question, answer, order: order || 0 });

  return res.status(201).json(new ApiResponse(201, faq, "FAQ created successfully"));
});

// PUT /api/faqs/:id
const updateFaq = asyncHandler(async (req, res) => {
  // Step 1: Get id from params
  const { id } = req.params;
  const { question, answer, order } = req.body;

  // Step 2: Validate
  if (!question || !answer) {
    throw new ApiError(400, "Question and answer are required");
  }

  // Step 3: Find and update
  const faq = await FAQ.findByIdAndUpdate(
    id,
    { question, answer, order: order || 0 },
    { new: true }
  );

  if (!faq) {
    throw new ApiError(404, "FAQ not found");
  }

  return res.status(200).json(new ApiResponse(200, faq, "FAQ updated successfully"));
});

// DELETE /api/faqs/:id
const deleteFaq = asyncHandler(async (req, res) => {
  // Step 1: Get id from params
  const { id } = req.params;

  // Step 2: Find and delete
  const faq = await FAQ.findByIdAndDelete(id);

  if (!faq) {
    throw new ApiError(404, "FAQ not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "FAQ deleted successfully"));
});

export { getAllFaqs, createFaq, updateFaq, deleteFaq };