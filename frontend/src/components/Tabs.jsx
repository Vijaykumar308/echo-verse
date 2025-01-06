import React, { useState } from 'react';
import TopHeader from './TopHeader';
import Grid from './Grid';

function Tabs() {
  const [activeTab, setActiveTab] = useState('sharedByMe');

  const renderContent = () => {
    switch (activeTab) {
      case 'sharedByMe':
        return <Grid content="Content shared by me" />;
      case 'sharedByOthers':
        return <Grid content="Content shared by others" />;
      case 'myPosts':
        return <Grid content="My posts content" />;
      default:
        return null;
    }
  };

  return (
    <>
        <TopHeader headerName='Echos'  tagline='Content shared by others that resonate with you or the community' />   
        <div className='mt-20'>
            <div className="flex space-x-4 border-b-2 py-3 bg-white fixed w-full">
            <button
                className={`py-2 px-4 ${activeTab === 'sharedByMe' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('sharedByMe')}
            >
                What I’ve Shared
            </button>
            <button
                className={`py-2 px-4 ${activeTab === 'sharedByOthers' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('sharedByOthers')}
            >
                Echoes of Others
            </button>
            <button
                className={`py-2 px-4 ${activeTab === 'myPosts' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                onClick={() => setActiveTab('myPosts')}
            >
                My Posts
            </button>
            </div>
            <div className="mt-6 bg-slate-100">
                {renderContent()}
            </div>
        </div>
    </>
  );
}

export default Tabs;
