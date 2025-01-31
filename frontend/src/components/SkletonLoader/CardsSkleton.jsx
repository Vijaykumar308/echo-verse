import React from 'react'

function CardsSkleton() {
  return (
    <div className="w-full bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex items-center justify-between animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
        </div>

        <div className="w-20 h-6 bg-gray-300 rounded-md"></div>
      </div>

      <div className="p-4 animate-pulse">

        <div className="w-full h-4 bg-gray-300 rounded-md mb-4"></div>

        <div className="h-40 bg-gray-200 rounded-lg"></div>
      </div>


      <div className="p-4 flex justify-between items-center animate-pulse">
        <div className="flex space-x-4">

          <div className="w-16 h-6 bg-gray-300 rounded-md"></div>

          <div className="w-16 h-6 bg-gray-300 rounded-md"></div>

          <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
        </div>

        <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>

  )
}

export default CardsSkleton

{/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(20)].map((_, index) => (
        <div
            key={index}
            className="w-full h-32 bg-gray-200 rounded shadow-sm hover:shadow-md"
        ></div>
        ))}
    </div> */}