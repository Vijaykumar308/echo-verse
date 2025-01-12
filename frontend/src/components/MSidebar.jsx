import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { FaCogs, FaHome, FaPlusCircle, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';

function MSidebar() {
    const [humburgerClicked, setHumburgerClicked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleMenuClicked = () => {
      setHumburgerClicked(prev => !prev);
    }
  
    const handleLogout = async () => {
      try {
        const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const res = await axios.get(`${backendBaseUrl}/logout`);
  
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setAuthUser(null));
          navigate('/login');
        }
  
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b-blue-100 bg-white shadow-md">
        <div className="text-lg font-bold">Logo</div>
        <div id="menu-icon" onClick={handleMenuClicked} className="text-3xl cursor-pointer lg:hidden">&#9776;</div>
      </header>

      <nav id="side-menu" className={`z-10 fixed left-0 top-0 w-48 h-full bg-white shadow-lg transform ${!humburgerClicked ? '-translate-x-full' : ''} transition-transform duration-300`}>
        <div className="text-lg font-bold p-5">Logo</div>
          <ul className="space-y-3">
            <NavLink to="/" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300 cursor-pointer">
                <FaHome size={20} />
                <span>Stream</span>
              </li>
            </NavLink>

            <NavLink to="/create-post" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
                <FaPlusCircle size={16} />
                <span>Express</span>
              </li>
            </NavLink>

            <NavLink to="/share-post" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
                <FaShareAlt size={16} />
                <span>Echoes</span>
              </li>
            </NavLink>

            <NavLink to="/mypost" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
                <FaUserCircle size={18} />
                <span>Gallery</span>
              </li>
            </NavLink>

            <NavLink to="/profile/:id" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
                <FaUserCircle size={18} />
                <span>Profile</span>
              </li>
            </NavLink>

            <NavLink to="/settings" className="block">
              <li className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
                <FaCogs size={20} />
                <span>Control</span>
              </li>
            </NavLink>
          </ul>

          <div className="absolute bottom-0 w-full flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
            <button onClick={handleLogout} className="flex items-center space-x-3 py-1">
              <span><BiLogOut size={22} /></span>
              <span>Logout</span>
            </button>
          </div>
      </nav>
    </div>
  )
}

export default MSidebar