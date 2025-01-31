import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { IoMenu } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";

function Header() {
  return (
    <>
        <div className='bg-blue-300 p-3 fixed w-full top-0'>
            <div className='logo font-medium text-xl'>Logo</div>
            <div className='hidden'>
                <ul>
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Sidebar</NavLink></li>
                    <li><NavLink>Some</NavLink></li>
                </ul>
            </div>
        </div>

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