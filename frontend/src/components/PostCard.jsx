import { formatDate } from 'date-fns';
import { Badge } from "@/components/ui/badge"
import React from 'react'

function PostCard({post, authUsername, profilePhoto}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md h-fit">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <img
          src={profilePhoto || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWxUKUkW7tZvtr1k4eldrbO7zC4KvcswHpwmah0jxfMz5SngEUItT4PnRJKnSx33Q4zw"}
          alt={`${post?.username}'s profile`}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className='flex flex-col'>
        <span className="font-semibold text-gray-800">
          {post?.sharedToDetails?.username}
        </span>
        <span className="text-xs text-gray-800">
          {post?.sharedToDetails?.email}
        </span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <Badge variant="secondary" className="bg-[#e6eef7] text-[#183d6d] capitalize">
          {post?.postDetails?.category}
        </Badge>
      </div>

      <h2 className="text-xl font-bold mb-2 text-[#183d6d]">{post?.postDetails?.title}</h2>
      <p className="text-gray-600 mb-4">{post?.postDetails?.content}</p>
      <div className="text-xs text-gray-400">Created on {formatDate(post?.postDetails?.createdAt,  "MMMM d, yyyy")}</div>
    </div>
  </div>
  )
}

export default PostCard