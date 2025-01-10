import express from "express";
import { createPost, getLoggedInUserAllPost } from "../controllers/post.controller.js";
import { getUserId } from "../middlewares/isAuthencated.js";

const router = express.Router();

router.post('/create-post', getUserId, createPost);
router.get('/getLoggedInUserAllPost',getUserId, getLoggedInUserAllPost);

export default router;