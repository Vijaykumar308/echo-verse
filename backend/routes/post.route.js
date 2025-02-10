import express from "express";
import { createPost, deletePost, getAllPostExceptLoggedInUser, getLoggedInUserAllPost } from "../controllers/post.controller.js";
import { getUserId } from "../middlewares/isAuthencated.js";

const router = express.Router();

router.post('/create-post', getUserId, createPost);
router.get('/getLoggedInUserAllPost',getUserId, getLoggedInUserAllPost);
router.get('/getAllPostExceptLoggedInUser',getUserId, getAllPostExceptLoggedInUser);
router.delete('/deletePost',getUserId, deletePost);

export default router;