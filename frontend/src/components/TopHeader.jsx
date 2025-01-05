import React from 'react'

function TopHeader({headerName, tagline}) {
  return (
    <div className='bg-slate-100 font-bold tracking-wide rounded-md py-4 px-5 text-xl mb-4'>
      <div className='flex flex-col gap-1'>
        <p className='tracking-wide text-shadow-sm text-blue-500 text-lg'>{headerName}</p>
        <span className='font-normal text-sm'>{tagline}</span>
      </div>
    </div>
  )
}

export default TopHeader