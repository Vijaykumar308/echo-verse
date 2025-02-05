import React, { useEffect, useState } from 'react'
import TableSwitcher from '../../components/TableSwitcher';
import TopHeader from '../../components/TopHeader';
import axios from 'axios';
import useToken from "../../hooks/useToken";
import PostCard from "../../components/PostCard";
import CardsSkleton from '../../components/SkletonLoader/CardsSkleton';
import { useSelector } from 'react-redux';
import SocialMediaCard from '@/components/SocialMediaCard';
import ExploreGrid from '@/components/ExploreGrid';

const data = [
  {
    "username": "dev3",
    "profilePic": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lbsa00UsDgPcl59JOnEXDWIhmZqld1W8nw&s",
    "likes": 100,
    "caption": "Caption for post 1"
  },
  {
    "username": "dev3",
    "profilePic": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    "postImage": "https://www.brainyquote.com/photos_tr/en/w/willienelson/184361/willienelson1.jpg",
    "likes": 101,
    "caption": "Caption for post 2"
  },
  {
    "username": "Sakhi Wagle",
    "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
    "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
    "likes": 102,
    "caption": "Caption for post 3"
  },
  {
    "username": "Sakhi Wagle",
    "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
    "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
    "likes": 102,
    "caption": "Caption for post 3"
  }
  // 97 more objects with similar structure but unique data
]


function MyPost() {  
  const {authUserPosts} = useSelector(store => store.posts);

  return (
    <>
     {/* <TopHeader headerName="My Posts" tagline="This is my posts" /> */}
       
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
          {
            data.map((item) => {
              // return <PostCard key={crypto.randomUUID()} item={post} />
             return <SocialMediaCard key={crypto.randomUUID()} 
                    username={item.username}
                    profilePic={item.profilePic}
                    postImage={item.postImage}
                    likes={1337}
                    caption="Just another day in paradise! #vacation #beach" />
            })
          }

        </div>
    </>
  )
}

export default MyPost





// function MyPost() {
//   const data = [
//       { id: 1, name: 'John Doe', age: 25, occupation: 'Engineer' },
//       { id: 2, name: 'Jane Smith', age: 30, occupation: 'Designer' },
//       { id: 3, name: 'Michael Brown', age: 35, occupation: 'Manager' },
//       { id: 4, name: 'Sarah Johnson', age: 28, occupation: 'Developer' },
//       ];
//     return (
//       <>
//        <TopHeader headerName="My Posts" tagline="This is my posts" />
//       <div className="container mx-auto p-4">
//           <TableSwitcher data={data} />
//       </div>
//       </>
//     )
  // }