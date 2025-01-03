import React from 'react';
import { FaHome, FaPlusCircle, FaShareAlt, FaUserCircle, FaCogs } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";


function Sidebar() {
  return (
    <aside className="w-[16%] bg-gray-100 border-r flex flex-col justify-between">
    <div>
      <h1 className="text-2xl font-bold my-10 text-center">Echo Verse</h1>
      <nav className='p-2'>
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
    <button className="flex text-lg px-6 py-2 rounded-sm items-center space-x-4 hover:text-blue-500 hover:bg-slate-300  cursor-pointer">
      <span><BiLogOut size={22}/></span>
      <span>Logout</span>
    </button>
  </aside>
  )
}

export default Sidebar