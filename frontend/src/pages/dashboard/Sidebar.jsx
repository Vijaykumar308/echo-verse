import React from 'react';
import { FaHome, FaPlusCircle, FaShareAlt, FaUserCircle, FaCogs } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../redux/authSlice';


function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async() => {
    try {
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const res = await axios.get(`${backendBaseUrl}/logout`);

      if(res.data.success) {
        toast.success(res.data.message);
        dispatch(setAuthUser(null));
        navigate('/login');
      }

    } catch (error) {
      console.log(error);
    }


  }
  return (
    <aside className="w-[16%] bg-gray-50 border-r flex flex-col justify-between fixed min-h-screen">
    <div>
      <h1 className="text-2xl font-bold my-10 text-center">Echo Verse</h1>
      <nav className='p-1'>
        <ul className="space-y-6">
          <li className="flex text-lg px-6 py-2 rounded-sm  items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
            <FaHome size={22} />
            <span>Home</span>
          </li>
          <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <FaPlusCircle size={20} />
            <span>Create</span>
          </li>
          <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <FaShareAlt size={20} />
            <span>Shared Posts</span>
          </li>
          <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <FaUserCircle size={22} />
            <span>My Posts</span>
          </li>
          <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <FaUserCircle size={22} />
            <span>Profile</span>
          </li>
          <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <FaCogs size={22} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>

    <div className="w-full flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
      <button onClick={handleLogout} className="flex items-center space-x-3 py-1">
        <span><BiLogOut size={22}/></span>
        <span>Logout</span>
      </button>
    </div>
  </aside>
  )
}

export default Sidebar