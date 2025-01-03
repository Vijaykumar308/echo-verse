import React from 'react'
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
      <Dashboard />
       <Outlet />
    </div>
  )
}

export default Layout