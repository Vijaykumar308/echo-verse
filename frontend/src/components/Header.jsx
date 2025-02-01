import React, { useState } from 'react';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { IoMenu } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { Button } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { Share2, Menu } from "lucide-react"
import axios from 'axios';
import { setAuthUser } from '@/redux/authSlice';
import { setPosts } from '@/redux/postSlice';
import { toast } from 'sonner';

function Header() {
    const {username} = useSelector(state => state?.user?.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const handleLogout = async() => {
      console.log(import.meta.VITE_BACKEND_BASE_URL);
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/logout`);
      console.log(res);
      if(res.data.success) {
        toast.success(res.data.message);
        dispatch(setAuthUser(null));
        dispatch(setPosts(null));
        sessionStorage.removeItem('token');
        navigate('/login');
      }
      else {
        console.log('goes in else');
      }
    }

  return (
    <>
         <header className="bg-[#0c2d54] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Content Share</h1>
        <nav className="hidden md:block">
            <ul className="flex space-x-4">
            <li>
                <a href="#" className="hover:text-[#a3c1e0]">
                Home
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-[#a3c1e0]">
                Explore
                </a>
            </li>
            <li>
                <a href="#" className="hover:text-[#a3c1e0]">
                My Content
                </a>
            </li>
            </ul>
        </nav>
          <div className="flex items-center">

            <div className="hidden md:flex items-center ml-4 space-x-2">
                <span className="px-4">Welcome, {username}</span>
                <Button variant="outline" onClick={handleLogout} className="text-white border-white hover:bg-white hover:text-[#0c2d54]">
                 Logout
                </Button>
            </div>

            <Button variant="ghost" className="md:hidden ml-2" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

        <div className='md:hidden w-full fixed bottom-0 bg-slate-500'>
            <ul className='flex items-center justify-between py-2 px-3'>
                <li><NavLink to="/create-post" className="text-stone-300"><IoIosCreate className='text-xl'/></NavLink></li>
                <li><NavLink to="/" className="text-stone-300"><TiHome className='text-2xl'/></NavLink></li>
                <li><NavLink to="/share-post" className="text-stone-300"><FaShare className='text-xl'/></NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default Header