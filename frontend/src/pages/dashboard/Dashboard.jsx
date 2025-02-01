import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard'
import TopHeader from '../../components/TopHeader';
import CardSkleton from "../../components/SkletonLoader/CardsSkleton";
import { useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { useDispatch, useSelector } from 'react-redux';
import UserContentCard from '@/components/UserContentCard';
import { Input } from '@/components/ui/input';
import { setPosts } from '@/redux/postSlice';

function Dashboard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const {authUserPosts} = useSelector(store => store.posts);
    const [token, setToken] = useToken();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const [contnet, setContent] = useState([...authUserPosts]);
    useEffect(() => {
        if(!token) {
            navigate('/login');
        }
    }, [token])

    const getData = async() => {
        try{
            setIsLoading(true);
            const resp = await fetch("https://dummyjson.com/posts");
            const actualData = await resp.json();
            setData(actualData.posts)
        }
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
       getData();  
    },[]);

    const handleSearch = (e) => {
        console.log({authUserPosts});
        console.log({contnet});

        if(e.target.value === "") {
            setContent([...authUserPosts]) 
            return;
        }
        
        const filterItems = contnet.filter((item) => item.title.toLowerCase().includes(e.target.value));
        setContent(filterItems);
    }

    return (
        <>
            <div className='w-1/3 py-5'>
                <Input placeholder="Search..." onChange={handleSearch}/>
            </div>
            
            <main>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {  isLoading && 
                        Array.from({ length: 10 }).map((_, index) => {
                            return <CardSkleton key={index} />
                        })
                    }
                    { 
                        contnet.map((item) => {
                            // console.log(item);
                            return <UserContentCard key={crypto.randomUUID()} 
                            title={item.title}
                            category={item.category}
                            content={item.content}
                            authorName= {item.authorDetails.username}
                            authorImage="/placeholder.svg?height=40&width=40"
                            createdAt= {item.createdAt}
                            pkId={item._id}
                            />
                        })
                    }
                </div>
            </main>
        </>
               
  )
}

export default Dashboard