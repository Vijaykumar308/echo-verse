import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard'
import TopHeader from '../../components/TopHeader';
import CardSkleton from "../../components/SkletonLoader/CardsSkleton";
import { useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { useSelector } from 'react-redux';

function Dashboard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const {authUserPosts} = useSelector(store => store.posts);
    const [token, setToken] = useToken();
    const navigate = useNavigate();

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

    return (
        <>
            <main>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
                    {  isLoading && 
                        Array.from({ length: 10 }).map((_, index) => {
                            return <CardSkleton key={index} />
                        })
                    }
                    { 
                        authUserPosts.map((item) => {
                            return <PostCard key={crypto.randomUUID()} item={item} />
                        })
                    }
                </div>
            </main>
        </>
               
  )
}

export default Dashboard