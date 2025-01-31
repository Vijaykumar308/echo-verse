import React from 'react'
import {Outlet} from "react-router-dom";
import Header from './Header';


function Layout() {
  return (
    <>
      <Header />
      <div className='contaier px-3'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout