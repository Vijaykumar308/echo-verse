import React from "react";
import SocialMediaCard from "./SocialMediaCard";

const explorePosts = [
    {
      "username": "dev3",
      "profilePic": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lbsa00UsDgPcl59JOnEXDWIhmZqld1W8nw&s",
      "likes": 100,
      "size":"medium",
      "caption": "Caption for post 1"
    },
    {
      "username": "dev3",
      "profilePic": "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      "postImage": "https://www.brainyquote.com/photos_tr/en/w/willienelson/184361/willienelson1.jpg",
      "likes": 101,
      "size":"medium",
      "caption": "Caption for post 2"
    },
    {
      "username": "Sakhi Wagle",
      "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
      "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
      "likes": 102,
      "size":"large",
      "caption": "Caption for post 3"
    },
    {
      "username": "Sakhi Wagle",
      "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
      "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
      "likes": 102,
      "size":"medium",
      "caption": "Caption for post 3"
    },
    {
        "username": "Sakhi Wagle",
        "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
        "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
        "likes": 102,
        "size":"medium",
        "caption": "Caption for post 3"
      },
      {
        "username": "Sakhi Wagle",
        "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
        "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
        "likes": 102,
        "size":"medium",
        "caption": "Caption for post 3"
      },
      {
        "username": "Sakhi Wagle",
        "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
        "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
        "likes": 102,
        "size":"medium",
        "caption": "Caption for post 3"
      },
      {
        "username": "Sakhi Wagle",
        "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
        "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
        "likes": 102,
        "size":"medium",
        "caption": "Caption for post 3"
      },{
        "username": "Sakhi Wagle",
        "profilePic": "https://i.pinimg.com/736x/c4/58/94/c45894a3331f2cde8d09a59497d8b7a0.jpg",
        "postImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_7cDM_5Vv-geps7Rejqlvq604DxCKOI_HA&s",
        "likes": 102,
        "size":"medium",
        "caption": "Caption for post 3"
      }
      
    // 97 more objects with similar structure but unique data
]

function ExploreGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2 auto-rows-min">
      {explorePosts.map((post, index) => (
        <div
          key={index}
          className={`
                ${post.size === "small" ? "col-span-1 row-span-1" : ""}
                ${post.size === "medium" ? "col-span-1 row-span-2" : ""}
                ${post.size === "large" ? "col-span-2 row-span-2" : ""}
            `}
        >
          <SocialMediaCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default ExploreGrid;
