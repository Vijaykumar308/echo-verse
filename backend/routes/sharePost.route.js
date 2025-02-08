import express from "express";
import { getSharedPost, sharePost } from "../controllers/sharePost.controller.js";
import { getUserId } from "../middlewares/isAuthencated.js";

const router = express.Router();
router.post("/sharedPost", getUserId, sharePost);
router.get("/getSharedPost/:authUserId", getUserId, getSharedPost);

export default router;