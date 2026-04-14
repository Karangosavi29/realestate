import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

// POST /api/login
const loginAdmin = asyncHandler(async (req, res) => {
  // Step 1: Destructure request body
  const { email, password } = req.body;

  // Step 2: Validate inputs
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  // Step 3: Find user in database
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Step 4: Check password (plain text for simple admin setup)
  if (user.password !== password) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Step 5: Save user to session
  req.session.user = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  // Step 6: Return success
  return res
    .status(200)
    .json(new ApiResponse(200, { email: user.email }, "Login successful"));
});

// POST /api/logout
const logoutAdmin = asyncHandler(async (req, res) => {
  // Step 1: Destroy session
  req.session.destroy((err) => {
    if (err) {
      throw new ApiError(500, "Failed to logout");
    }
    res.clearCookie("connect.sid");
    return res.status(200).json(new ApiResponse(200, {}, "Logged out successfully"));
  });
});

// GET /api/me
const getMe = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, "Authenticated"));
});

export { loginAdmin, logoutAdmin, getMe };