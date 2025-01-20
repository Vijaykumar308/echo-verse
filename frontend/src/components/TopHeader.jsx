import { Banner } from 'flowbite-react'
import React from 'react'

function TopHeader({headerName, tagline}) {
  return (
    <Banner style={{marginBottom:"70px"}}>
      <div className='fixed w-[60%] z-10'>
        <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex">
                {headerName} - {tagline}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default TopHeader


// <div className='fixed w-[60%] bg-white border-b-2 font-bold tracking-wide rounded-md py-4 px-5 text-xl'>
// <div className='flex flex-col gap-1'>
//   <p className='tracking-wide text-shadow-sm text-blue-500 text-lg'>{headerName}</p>
//   <span className='font-normal text-sm'>{tagline}</span>
// </div>
// </div>