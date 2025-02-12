import mongoose from "mongoose";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import {SharedPost} from "../models/sharedPost.model.js";

export const sharePost = catchAsyncError(async(req, res, next) => {
    try {
       
        const {postId, sharedUserId, userFromId } = req.body;

        const sharedPostOperations = sharedUserId.map(obj => {
            return {
                insertOne: {
                    document: {
                        postId: new mongoose.Types.ObjectId(postId),
                        userSharedId: new mongoose.Types.ObjectId(obj._id),
                        userFromId: new mongoose.Types.ObjectId(userFromId)
                    }
                }
            };
        });
        
        if (sharedPostOperations.length > 0) {
            await SharedPost.bulkWrite(sharedPostOperations);
        }


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

export const getSharedPost = catchAsyncError(async(req, res, next) => {
    try {
        const userId = req.params.authUserId;

        const sharedPosts = await SharedPost.aggregate([
            {
              $match: {
                userFromId: new mongoose.Types.ObjectId(userId)
              }
            },
            {
              $lookup: {
                from: "users",
                localField: "userFromId",
                foreignField: "_id",
                as: "userSender"
              }
            },
            {
              $lookup: {
                from: "posts",
                localField: "postId",
                foreignField: "_id",
                as: "postDetails"
              }
            },
            {
              $lookup: {
                from: "users",
                localField: "userSharedId",
                foreignField: "_id",
                as: "sharedToDetails"
              }
            },
            {
              $project: {
                "__v": 0,
                "_id": 0,
                "postId": 0,
                "userFromId": 0,
                "userSender.password": 0,
                "userSender.isAgreeTermsAndConditions": 0,
                "userSender.accountVerified": 0,
                "userSender.createdAt": 0,
                "userSender.updatedAt": 0,
                "userSender.__v": 0,
                "sharedToDetails.password": 0,
                "sharedToDetails.isAgreeTermsAndConditions": 0,
                "sharedToDetails.accountVerified": 0,
                "sharedToDetails.createdAt": 0,
                "sharedToDetails.updatedAt": 0,
                "sharedToDetails.__v": 0
              }
            }
        ]);
      
        const result = {
            success: true,
            data: {
                userSender: sharedPosts.length > 0 ? sharedPosts[0].userSender[0] : null, 
                
                SharedDetails: sharedPosts.map((post) => {
                  const postDetails = {};
                  if(post.postDetails.length > 0) {
                    postDetails["postDetails"] = post.postDetails[0],
                    postDetails["sharedToDetails"] = post.sharedToDetails[0]
                    return postDetails;
                  }
                  return null;
                }).filter((postDetails) => postDetails !== null)
            }
        };      
        return res.status(200).json(result);
    } catch (err) {
        return next(new ErrorHandler(err));
    }
});
