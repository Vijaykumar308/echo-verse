import React from 'react';
import PostCard from './PostCard';

const item = {
    body: "To design this component in React using TailwindCSS, you can create a tabbed layout with different sections for Shared By Me, Shared By Others, and My Posts Each tab will display a grid of items below it"
}

function Grid({ content }) {
  return (
    <div className="px-3 py-20 grid grid-cols-3 gap-6 mb-10">
      {[...Array(12)].map((_, index) => (
        // <div key={index} className="w-full h-32 bg-gray-200 flex items-center justify-center">
          <PostCard item={item}/>
        // </div>
      ))}
    </div>
  );
}

export default Grid;
