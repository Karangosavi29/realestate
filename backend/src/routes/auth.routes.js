import { Router } from "express";
import { loginAdmin, logoutAdmin, getMe } from "../controllers/auth.controller.js";
import { isAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", isAdmin, getMe);

export default router;