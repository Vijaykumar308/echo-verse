import React from 'react'
import TopHeader from '../../components/TopHeader'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import { BsSaveFill } from "react-icons/bs";
import SocialMediaCard from '@/components/SocialMediaCard';

const posts = [
    {
      username: "john_doe",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_AK6nCYnJQ-uiSckoOMz8BJ5FKmHjWLnqA&s",
      postImage: "https://media2.thrillophilia.com/images/photos/000/376/905/original/1640609833_Varkala_Beach.jpg?w=753&h=450&dpr=1.5",
      likes: 1337,
      caption: "Just another day in paradise! #vacation #beach",
    },
    {
      username: "jane_smith",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOR3MFxYOxushprQh1brkb0MR3QJQSQX-4w&s",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBFm-6k3o5-wk4G6j6QgKjXY03JoARTFMNg&s",
      likes: 452,
      caption: "Exploring the mountains. #hiking #nature",
    },
    {
      username: "travel_guru",
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_AK6nCYnJQ-uiSckoOMz8BJ5FKmHjWLnqA&s",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeV2HXuxx89bujhjNh5HWQn2Curfx3p0BIZw&s",
      likes: 765,
      caption: "City lights and good vibes. #cityscape #wanderlust",
    },
  ];
  

function EchoPage() {
    const {authUserPosts} = useSelector(store => store.posts);

  return (
    <>
        <TopHeader headerName="Echos" tagline="Content shared by others that resonate with you or the community" />
        <div>
            <Tabs aria-label="Tabs with underline" variant="underline" style={{    position: "fixed",
                width:"60%",
                background: "#ffffff",
                marginTop: "-17px",
            }}>
                
                <Tabs.Item active title="My Posts" icon={MdDashboard}>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12"> 
                        {
                            authUserPosts.map((item) => {
                                return <PostCard key={crypto.randomUUID()} item={item} />
                            })
                        }
                    </div>
                </Tabs.Item>


            <Tabs.Item title="Echo of Others" icon={MdDashboard}>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12'>
                    {
                        posts.map((item) => {
                            return <SocialMediaCard key={crypto.randomUUID()} 
                                username={item.username}
                                profilePic={item.profilePic}
                                postImage={item.postImage}
                                likes={1337}
                                caption={item.caption}
                            />
                        })
                    }
                </div>
                
            </Tabs.Item>

            <Tabs.Item title="Shared By Me" icon={HiAdjustments}>
                This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>

            <Tabs.Item title="Saved" icon={BsSaveFill}>
                This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            </Tabs.Item>            
            </Tabs>
        </div>
    </>
  )
}

export default EchoPage