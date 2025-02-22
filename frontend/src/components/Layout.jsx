import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../pages/dashboard/Sidebar';
import RightSidebar from '../pages/dashboard/RightSidebar';
import { FaCogs, FaHome, FaPlusCircle, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { BiLogOut } from 'react-icons/bi';
import MSidebar from './MSidebar';
import TopHeader from './TopHeader';


function Layout() {
  return (
    <>
      <div className='lg:hidden'>
        <MSidebar/>
      </div>
      
      <div className='flex'>
        <aside className="hidden flex-1 lg:fixed sm:min-h-screen sm:w-44 lg:w-52 bg-gray-50 border-r lg:flex flex-col justify-between">
          <Sidebar />
        </aside>

        <div className='flex-2'>
          <div className='mt-1 lg:mt-0'>
            <TopHeader headerName="Stream" tagline="Connect to world" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout


{/* <div className='md:flex md:min-h-screen'>
        <aside className="hidden md:fixed sm:min-h-screen sm:w-44 lg:w-52 bg-gray-50 border-r md:flex flex-col justify-between">
          <Sidebar />
        </aside>
        <div className='flex-1 md:ml-[15%] md:mr-[25%]'>
          <Outlet />
        </div>

        <RightSidebar />
      </div> */}