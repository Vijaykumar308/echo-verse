import React, { useEffect, useState } from 'react'
import TableSwitcher from '../../components/TableSwitcher';
import TopHeader from '../../components/TopHeader';
import axios from 'axios';
import useToken from "../../hooks/useToken";
import PostCard from "../../components/PostCard";
import CardsSkleton from '../../components/SkletonLoader/CardsSkleton';
import { useSelector } from 'react-redux';
import SocialMediaCard from '@/components/SocialMediaCard';

function MyPost() {  
  const {authUserPosts} = useSelector(store => store.posts);

  return (
    <>
     <TopHeader headerName="My Posts" tagline="This is my posts" />
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
          {
            authUserPosts.map((post) => {
              // return <PostCard key={crypto.randomUUID()} item={post} />
             return <SocialMediaCard key={crypto.randomUUID()} 
                    username="johndoe"
                    profilePic="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                    postImage="https://i.pinimg.com/736x/17/8f/d6/178fd68a26534af5561a687308de67bb.jpg"
                    likes={1337}
                    caption="Just another day in paradise! #vacation #beach" />
            })
          }
        </div>
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