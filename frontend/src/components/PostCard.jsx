import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { FaArrowUp, FaStar } from 'react-icons/fa'
import { CiBookmark } from "react-icons/ci";
import { IoMdPersonAdd } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function PostCard({item}) {
  console.log('items in postcard: ',item);
  return (
    <div className="max-w-md bg-white border rounded-lg shadow-md overflow-hidden">
       <div className="p-4 flex items-center justify-between lg:flex-row md:flex-col md:items-start md:gap-3">
         <div className="flex items-center">
           <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpXG8YdajWVxuHjLGVOnwphn1iQ3ahvMe2Q&s"
             alt="Profile"
             className="w-10 h-10 rounded-full"
           />
           <span className="ml-4 font-semibold">
            <NavLink to={`/profile/${item?.authorDetails?.username}`}>
              {item?.authorDetails?.username}
            </NavLink>
           </span>
         </div>
         <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 md:self-end">
         <IoMdPersonAdd size={18}/>
         </button>
       </div>
       <div className="p-4">
         <p className="text-gray-700 mb-4">
          {item?.content}
         </p>
         {/* <div className="h-40 bg-gray-200 rounded-lg"></div> */}
       </div>
       <div className="p-4 flex justify-between items-center">
         <div className="flex space-x-4">
           <button className="flex items-center text-gray-600 hover:text-red-500">
             <CiHeart size={24} className="mr-1" />
             <span>{item?.reactions?.likes}</span>
           </button>
           <button className="flex items-center text-gray-600 hover:text-blue-500">
             <CiShare2 size={19} className="mr-1" />
             <span>{item?.views}</span>
           </button>
           <button className="flex items-center text-gray-600 hover:text-yellow-500">
             <CiBookmark size={20} className="mr-1" />
             <span>{item?.reactions?.dislikes}</span>
           </button>
         </div>
         <span className="text-sm text-gray-500">Aug 30, 2025</span>
       </div>
    </div>
  )
}

export default PostCard