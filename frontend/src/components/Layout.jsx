import React from 'react'
import {Outlet} from "react-router-dom";
import Sidebar from '../pages/dashboard/Sidebar';
import RightSidebar from '../pages/dashboard/RightSidebar';

function Layout() {
  return (
    <>
    <div className='md:flex md:min-h-screen'>
      <aside className="md:fixed sm:min-h-screen sm:w-44 lg:w-52 bg-gray-50 border-r flex flex-col justify-between">
        <Sidebar />
      </aside>
      <div className='flex-1 ml-[16%] mr-[20%]'>
        <Outlet />
      </div>

      <RightSidebar />
    </div>
  </>
  )
}

export default Layout