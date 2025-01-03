import React from 'react'
import {Outlet} from "react-router-dom";
import Sidebar from '../pages/dashboard/Sidebar';
import RightSidebar from '../pages/dashboard/RightSidebar';
import TopHeader from './TopHeader';

function Layout() {
  return (
    <>
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1'>
        <Outlet />
      </div>

      <RightSidebar />
    </div>
  </>
  )
}

export default Layout