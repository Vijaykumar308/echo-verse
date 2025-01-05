import React from 'react'
import {Outlet} from "react-router-dom";
import Sidebar from '../pages/dashboard/Sidebar';
import RightSidebar from '../pages/dashboard/RightSidebar';

function Layout() {
  return (
    <>
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1 ml-[16%] mr-[20%]'>
        <Outlet />
      </div>

      <RightSidebar />
    </div>
  </>
  )
}

export default Layout