import React, { useState } from 'react';
import TopHeader from './TopHeader';
import Grid from './Grid';
import { useSelector } from 'react-redux';

function Tabs() {
  const authUserPost = useSelector(store => store.posts);

  const tabs = [
    { id: 'myPosts', label: 'My Posts', content: [authUserPost] },
    { id: 'sharedByOthers', label: 'Echoes of Others', content:  'Content shared by others'  },
    { id: 'sharedByMe', label: 'What I’ve Shared', content:  'Content shared by me'  },
    { id: 'saved', label: 'Saved', content:  'Content Saved by me'  }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Dynamically render content based on activeTab
  const renderContent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    return activeTabData ? <Grid content={activeTabData.content} /> : null;
  };

  return (
    <>
      <TopHeader
        headerName="Echos"
        tagline="Content shared by others that resonate with you or the community"
      />
      <div className="mt-20">
        <div className="flex space-x-4 border-b-2 py-3 bg-white fixed w-[60%]">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`py-2 px-4 ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-slate-100">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default Tabs;






























// import React, { useState } from 'react';
// import TopHeader from './TopHeader';
// import Grid from './Grid';

// function Tabs() {
//   const [activeTab, setActiveTab] = useState('myPosts');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'sharedByMe':
//         return <Grid content="Content shared by me" />;
//       case 'sharedByOthers':
//         return <Grid content="Content shared by others" />;
//       case 'myPosts':
//         return <Grid content="My posts content" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <TopHeader headerName='Echos' tagline='Content shared by others that resonate with you or the community' />
//       <div className='mt-20'>
//         <div className="flex space-x-4 border-b-2 py-3 bg-white fixed w-full">
//           <button
//             className={`py-2 px-4 ${activeTab === 'myPosts' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
//             onClick={() => setActiveTab('myPosts')}
//           >
//             My Posts
//           </button>

//           <button
//             className={`py-2 px-4 ${activeTab === 'sharedByOthers' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
//             onClick={() => setActiveTab('sharedByOthers')}
//           >
//             Echoes of Others
//           </button>
//           <button
//             className={`py-2 px-4 ${activeTab === 'sharedByMe' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
//             onClick={() => setActiveTab('sharedByMe')}
//           >
//             What I’ve Shared
//           </button>
//         </div>

//         <div className="mt-6 bg-slate-100">
//           {renderContent()}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Tabs;
