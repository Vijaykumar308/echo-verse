import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { isEmptyString } from "../utils/utilisFunc.js";

import {Post} from "../models/post.model.js";
import {Category} from "../models/category.model.js";
import { OTHER } from "../utils/constants.js";

export const createPost = catchAsyncError(async(req, res, next) => {
    try {
        const {title, category, otherCategory, content} = req.body; 

        if(isEmptyString(title) || isEmptyString(category) || isEmptyString(content) || (category.trim().toLowerCase() === OTHER && isEmptyString(otherCategory))) {
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

        if(category.trim().toLowerCase() != OTHER) {
            return res.status(201).json({
                post
            }); 
        }

        const catData = {
            name:otherCategory,
            author_id: req.userId,
            post_id:post._id
        }

        const categoryData = await Category.create(catData);
        await categoryData.save();

        return res.status(201).json({
            post,
            categoryData
        });

    } catch (error) {
        return next(new ErrorHandler("Post Something went wrong", error));
    }
}); 
