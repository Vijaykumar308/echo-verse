import React from 'react'
import FriendSuggestions from '../../components/FriendSuggestions'

function RightSidebar() {
  return (
    // w-1/6
    <aside className="bg-gray-100 border-l fixed right-0 min-h-screen">
        <ul>
            <FriendSuggestions />
        </ul>
    </aside>
  )
}

export default RightSidebar