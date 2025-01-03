import React, { useState } from 'react';

const FriendSuggestions = () => {
  // Sample friend suggestions data
  const suggestions = [
    {
      id: 1,
      name: 'John Doe',
      status: 'Loves hiking and photography',
      mutualFriends: 3,
      profilePicture: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'Studying at Stanford University',
      mutualFriends: 2,
      profilePicture: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      id: 3,
      name: 'Emily Lee',
      status: 'Works at Google',
      mutualFriends: 4,
      profilePicture: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
  ];

  const [friendRequests, setFriendRequests] = useState([]);

  // Handle adding friend
  const handleAddFriend = (id) => {
    setFriendRequests((prev) => [...prev, id]);
  };

  // Handle skipping friend suggestion
  const handleSkipFriend = (id) => {
    setFriendRequests((prev) => prev.filter((requestId) => requestId !== id));
  };

  return (
    <div className="p-4">
        <h2 className="text-xl font-semibold mb-6">People You May Know</h2>
        <div className="space-y-4">
            {suggestions.map((suggestion) => (
            <div
                key={suggestion.id}
                className="flex space-x-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
                {/* Profile Picture and Info */}
                <div className="flex-shrink-0">
                <img
                    src={suggestion.profilePicture}
                    alt={suggestion.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-semibold">{suggestion.name}</h3>
                    <p className="text-xs text-gray-600">{suggestion.status}</p>
                    <p className="text-xs text-gray-500">{suggestion.mutualFriends} mutual friends</p>
                </div>
            </div>
            ))}
            
            {/* Buttons */}
            <div className="flex items-center">
                {!friendRequests.includes('sd') ? (
                    <button
                    onClick={() => handleAddFriend('sd')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                    Add Friend
                    </button>
                ) : (
                    <span className="text-green-500 font-medium">Friend Request Sent</span>
                )}
                <button
                    onClick={() => handleSkipFriend('sd')}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                >
                    Skip
                </button>
            </div>
        </div>
    </div>
  );
};

export default FriendSuggestions;
