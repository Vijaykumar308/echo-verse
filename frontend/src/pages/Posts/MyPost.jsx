import React, { useEffect, useState } from 'react'
import TableSwitcher from '../../components/TableSwitcher';
import TopHeader from '../../components/TopHeader';
import axios from 'axios';
import useToken from "../../hooks/useToken";
import PostCard from "../../components/PostCard";
import CardsSkleton from '../../components/SkletonLoader/CardsSkleton';

function MyPost() {
  const [posts, setPosts] = useState([]);
  const token = useToken();
  const [isLoading, setIsLoading]= useState(false);

  const getPost = async() => {
    try {
      setIsLoading(true);
      
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/post/getLoggedInUserAllPost`, {
        headers:{
          "Authorization": token,
        }
      });

      return response;
      
    } catch (error) {
      console.log('error');
      return error; 
    }
    finally{
      setIsLoading(false);
    }
  }

  console.log(posts);

  useEffect(() => {
    getPost()
    .then((data) => {
      setPosts(data.data.posts)
    });
  }, []) 

  return (
    <>
     <TopHeader headerName="My Posts" tagline="This is my posts" />
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
        {  isLoading && 
            Array.from({ length: 10 }).map((_, index) => {
                return <CardsSkleton key={index} />
            })
        }
            {
                posts.map((item, index) => {
                    return <PostCard key={index} item={item} />
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