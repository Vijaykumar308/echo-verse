import React from 'react'
import TopHeader from '../../components/TopHeader'
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import { BsSaveFill } from "react-icons/bs";

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
                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
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