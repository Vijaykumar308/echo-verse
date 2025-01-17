import React, { useEffect, useState } from 'react'
import TableSwitcher from '../../components/TableSwitcher';
import TopHeader from '../../components/TopHeader';
import axios from 'axios';
import useToken from "../../hooks/useToken";
import PostCard from "../../components/PostCard";
import CardsSkleton from '../../components/SkletonLoader/CardsSkleton';
import { useSelector } from 'react-redux';

function MyPost() {  
  const {authUserPosts} = useSelector(store => store.posts);

  return (
    <>
     <TopHeader headerName="My Posts" tagline="This is my posts" />
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
          {
            authUserPosts.map((post) => {
              return <PostCard key={crypto.randomUUID()} item={post} />
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