import React from 'react';
import { FaEnvelope, FaUserPlus } from 'react-icons/fa';

const Profile = ({ name, username, bio, followers, following, posts }) => {
  return (
    <div className="mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWgB8SCrIDtQWSVcDLriuotLHPV9hIT5v3Ig&s"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative px-4 pb-4">
          <div className="flex justify-between">
            <div className="flex items-end">
              <div className="absolute -top-16 border-4 border-white rounded-full overflow-hidden">
                <img
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt={name}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="ml-36 pb-4">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-gray-500">@{username}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:bg-blue-100 transition duration-300 flex items-center">
                <FaEnvelope className="mr-2" />
                Message
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
                <FaUserPlus className="mr-2" />
                Follow
              </button>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{bio}</p>
          <div className="flex justify-between mt-4 text-center">
            <div>
              <p className="font-bold">{posts}</p>
              <p className="text-gray-500">Posts</p>
            </div>
            <div>
              <p className="font-bold">{followers}</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div>
              <p className="font-bold">{following}</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex border-b">
          <button className="flex-1 py-2 px-4 text-center border-b-2 border-blue-500 text-blue-500 font-semibold">
            Posts
          </button>
          <button className="flex-1 py-2 px-4 text-center text-gray-500 hover:text-gray-700">
            Likes
          </button>
          <button className="flex-1 py-2 px-4 text-center text-gray-500 hover:text-gray-700">
            Saves
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
              <img
                src={`https://via.placeholder.com/300x300?text=Post ${i + 1}`}
                alt={`Post ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

