import { ApiError } from "../utils/apiError.js";

// Simple session-based auth middleware
const isAdmin = (req, res, next) => {
  // Step 1: Check if session exists and user is logged in
  if (!req.session || !req.session.user) {
    throw new ApiError(401, "Unauthorized. Please login first.");
  }

  // Step 2: Attach user to request
  req.user = req.session.user;
  next();
};

export { isAdmin };