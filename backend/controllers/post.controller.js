import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { isEmptyString } from "../utils/utilisFunc.js";

import {Post} from "../models/post.model.js";


export const createPost = catchAsyncError(async(req, res, next) => {
    try {
        const {title, category, otherCategory, content} = req.body; 

        if(isEmptyString(title) || isEmptyString(category) || isEmptyString(content)) {
            return next(new ErrorHandler("All Fields are mendatory", 400));
        }
        
        const postData = {
            title,
            category,
            otherCategory,
            content,
            author_id:req.userId
        }
        
        const post = await Post.create(postData);
        await post.save();

        return res.status(201).json({
            post,
        });

        
    } catch (error) {
        return next(new ErrorHandler("Post Something went wrong", error));
    }
}); 
