import React from 'react'

function CircularLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
    </div>
  )
}

export default CircularLoader