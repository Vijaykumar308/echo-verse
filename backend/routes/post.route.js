import express from "express";
import { createPost, getAllPostExceptLoggedInUser, getLoggedInUserAllPost } from "../controllers/post.controller.js";
import { getUserId } from "../middlewares/isAuthencated.js";

const router = express.Router();

router.post('/create-post', getUserId, createPost);
router.get('/getLoggedInUserAllPost',getUserId, getLoggedInUserAllPost);
router.get('/getAllPostExceptLoggedInUser',getUserId, getAllPostExceptLoggedInUser);

export default router;