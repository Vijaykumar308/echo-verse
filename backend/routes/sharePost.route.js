import express from "express";
import { sharePost } from "../controllers/sharePost.controller.js";
import { getUserId } from "../middlewares/isAuthencated.js";

const router = express.Router();
router.post("/sharedPost", getUserId, sharePost);

export default router;