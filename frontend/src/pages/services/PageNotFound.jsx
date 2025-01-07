import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-xl font-semibold text-gray-700">Sorry, Page Not Found</p>
      <p className="text-center text-gray-500 mt-4">
        It will be as simple as Occidental in fact, it will Occidental to an English person
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
      >
        Back to Dashboard
      </button>
      <div className="flex mt-8 space-x-8">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-300 rounded-full"></div>
          <p className="mt-4 text-gray-500">Description</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-300 rounded-full"></div>
          <p className="mt-4 text-gray-500">Description</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-300 rounded-full"></div>
          <p className="mt-4 text-gray-500">Description</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
