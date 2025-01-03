import React from 'react'
import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'

function Dashboard() {
  return (
    <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-5">
        <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, index) => (
            <div
                key={index}
                className="w-full h-32 bg-gray-200 rounded shadow-sm hover:shadow-md"
            ></div>
            ))}
        </div>
        </main>

        {/* Right Sidebar */}
       <RightSidebar />
     </div>
  )
}

export default Dashboard