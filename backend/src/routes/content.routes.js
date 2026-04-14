import { Router } from "express";
import { getAllContent, updateContent } from "../controllers/content.controller.js";
import { isAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getAllContent);
router.put("/:section", isAdmin, updateContent);

export default router;