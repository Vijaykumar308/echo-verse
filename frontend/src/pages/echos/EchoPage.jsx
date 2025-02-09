import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '@/components/PostCard';
import axios from 'axios';
import useToken from '@/hooks/useToken';
import useLoader from '@/hooks/useLoader';
import CardsSkleton from '@/components/SkletonLoader/CardsSkleton';
import { Tabs } from "flowbite-react";

function EchoPage() {
    const { _id: authUserId, username: authUsername } = useSelector(store => store.user.user);
    const token = useToken();
    const [posts, setPost] = useState([]);
    const { isLoading, startLoading, stopLoading } = useLoader();

    const handleFetchIhaveShared = async () => {
        try {
            startLoading(true);
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_BASE_URL}/getSharedPost/${authUserId}`,
                {
                    headers: {
                        Authorization: token
                    }
                }
            );
            console.log(res.data);  // Check the structure of the API response
            setPost(res.data);  // Assuming res.data is the expected object
        } catch (err) {
            console.log(err);
        } finally {
            stopLoading(false);
        }
    };

    useEffect(() => {
        handleFetchIhaveShared();
    }, [authUserId, token]);  // Re-run when authUserId or token changes

    return (
        <div className='container mx-auto'>
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Post I've Shared">
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                        {/* Show skeleton loader when data is loading */}
                        {isLoading && 
                            Array.from({ length: 10 }).map((_, index) => (
                                <CardsSkleton key={index} />
                            ))
                        }

                        {/* Render posts when data is available */}
                        {!isLoading && posts?.data?.SharedDetails?.length > 0 ? (
                            posts.data.SharedDetails.map((item, index) => (
                                console.log(item),
                                <PostCard key={crypto.randomUUID()} post={item} authUsername={authUsername} />
                            ))
                        ) : (
                            !isLoading && <p>No posts available</p>  // If no posts are available
                        )}
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Post's Received">
                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Settings">
                    This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
                <Tabs.Item title="Contacts">
                    This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                </Tabs.Item>
            </Tabs>
        </div>
    );
}

export default EchoPage;
