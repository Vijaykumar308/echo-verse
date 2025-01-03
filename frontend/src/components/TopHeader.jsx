import React from 'react'

function TopHeader({headerName, tagline}) {
  return (
    <div className='bg-slate-100 font-bold tracking-wide rounded-md py-4 px-5 text-xl mb-4'>
        <p>{headerName} - <span className='font-normal text-lg'>{tagline}</span></p>
    </div>
  )
}

export default TopHeader