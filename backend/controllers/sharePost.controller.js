import mongoose from "mongoose";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import {SharedPost} from "../models/sharedPost.model.js";

export const sharePost = catchAsyncError(async(req, res, next) => {
    try {
       
        const {postId, sharedUserId } = req.body;

        const sharedPostData = {
            postId: new mongoose.Types.ObjectId(postId),
            userSharedId:new mongoose.Types.ObjectId(sharedUserId)
        };

        const share = await SharedPost.create(sharedPostData);        
        await share.save();

        res.status(200).json({
            success:true,
            postId,
            sharedUserId,
            message:"Post Shared Successfully..."
        });
    } catch (error) {
        return next(new ErrorHandler(error));
    }
});
