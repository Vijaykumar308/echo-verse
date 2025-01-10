import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        reqired:[true, "Post title is required"]
    },

    category: {
        type:String,
        reqired:[true, "Category is required"],
    },

    other_category:String,

    author_id: {
       type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       required:true
    }

},
{ timestamps: true,}
);

export const Post = mongoose.model('Post', postSchema);