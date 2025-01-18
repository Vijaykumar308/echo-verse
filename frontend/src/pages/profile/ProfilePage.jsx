import React from 'react'
import Profile from '../../components/Profile'
import TopHeader from '../../components/TopHeader'

function ProfilePage() {
  return (
    <>
    <TopHeader headerName="Profile" tagline="Nice Profile" />
    <div className="bg-gray-100 min-h-screen z-0">
    <Profile
      name="John Doe"
      username="johndoe"
      bio="Passionate photographer and traveler. Capturing moments and sharing stories."
      followers={1234}
      following={567}
      posts={42}
      />
    </div>
    </>
  )
}

export default ProfilePage