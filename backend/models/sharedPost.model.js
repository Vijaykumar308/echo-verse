import mongoose from 'mongoose';

const sharedPostSchema = mongoose.Schema({
    postId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },
    userSharedId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    userFromId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}, 
{timeStamps:true}
);

export const SharedPost = mongoose.model("SharedPost", sharedPostSchema);


/**
 * id     |  post_id     |  user_shared_id
 * 1.     |     12       |      02
 * 2.     |     21       |      02
 * 3.     |     32       |       01
 */