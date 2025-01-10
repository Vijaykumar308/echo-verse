import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { getUserId } from "../utils/utilisFunc.js";

const router = express.Router();

router.post('/create-post', getUserId, createPost);

export default router;