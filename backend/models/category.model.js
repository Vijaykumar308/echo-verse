import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:String,
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    post_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    }
});

export const Category = mongoose.model('Category', categorySchema);