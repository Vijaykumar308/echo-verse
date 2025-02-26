import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { isEmptyString } from "../utils/utilisFunc.js";

import {Post} from "../models/post.model.js";
import {Category} from "../models/category.model.js";
import { OTHER } from "../utils/constants.js";
import mongoose from "mongoose";

async function callGPT(prompt) {
    if (!prompt) {
      alert("Please enter a prompt.");
      return;
    }

    try {
        // Make the API request using fetch
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GPT_KEY}`,
          },
          body: JSON.stringify({
            model: 'omni-moderation-latest', // You can change this to "gpt-4" or other models
            messages: [
                {
                  "role": "developer",
                  "content": "You are a helpful assistant."
                },
                {
                  "role": "user",
                  "content": "Hello!"
                }
              ]
          }),
        });

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Error calling GPT API:", error);
    }
}  

export const createPost = catchAsyncError(async(req, res, next) => {
    try {
        const {title, category, otherCategory, content} = req.body; 

        if(isEmptyString(title) || isEmptyString(category) || isEmptyString(content) || (category.trim().toLowerCase() === OTHER && isEmptyString(otherCategory))) {
            return next(new ErrorHandler("All Fields are mendatory......", 400));
        }

        // const gptResponse = await callGPT(content);

        // // console.log(gptResponse);

        // return res.status(201).json({
        //     gptResponse
        // });


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
                success:true,
                message:"Post Created Successfully",
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

export const getLoggedInUserAllPost = catchAsyncError(async(req, res, next) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.userId);

        const posts = await Post.aggregate([
            {
              $match: { author_id: userId }  
            },
            {
              $lookup: {
                from: "users",              
                localField: "author_id",    
                foreignField: "_id",        
                as: "authorDetails"         
              }
            },
            {
              $unwind: "$authorDetails"      
            },
            {
              $project: {
                "authorDetails.password": 0,  
                "author_id": 0          
              }
            }
        ]);

        if(!posts || posts.length === 0) {
            return next(new ErrorHandler("Post Not Found", 404));
        }

        return res.status(200).json({
            statusCode:200,
            success:true,
            posts
        });

    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
})

export const getAllPostExceptLoggedInUser = catchAsyncError(async(req, res, next) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.userId);

        const posts = await Post.find({$nor:[{author_id:userId}]}).select("-author_id");
        if(!posts) {
            return next(new ErrorHandler("Post Not Found", 404));
        }

        return res.status(200).json({
            statusCode:200,
            success:true,
            posts
        });

    } catch (error) {
        return next(new ErrorHandler(error, 500));
    }
})

export const deletePost = catchAsyncError(async(req, res, next) => {
    try {
        const { postId } = req.body;
        console.log(req.userId);

        const postExist = await Post.findOne({author_id: new mongoose.Types.ObjectId(req.userId)});
        
        if(postExist) {
            await Post.deleteOne({_id:postExist._id});
        }
        else {
            return next(new ErrorHandler("Post Can not delete Something went wrong."));
        }

        res.status(200).json({
            success:true,
            message:"Post Delete successfully"
        })
        
    } catch (error) {
        return next(new ErrorHandler(error));
    }
});