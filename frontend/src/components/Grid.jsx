import React from 'react';
import PostCard from './PostCard';

const item = {
    body: "To design this component in React using TailwindCSS, you can create a tabbed layout with different sections for Shared By Me, Shared By Others, and My Posts Each tab will display a grid of items below it"
}

function Grid({ content }) {
  // console.log(content);
  return (
    <div className="py-20 grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10"> 
      {content?.authUserPosts?.map((item) => (
        // <div key={index} className="w-full h-32 bg-gray-200 flex items-center justify-center">
          <PostCard key={crypto.randomUUID()} item={item}/>
          // {content}
        // </div>
      )) }
    </div>
  );
}

export default Grid;
