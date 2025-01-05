import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; 
import { FiEdit, FiChevronDown } from 'react-icons/fi'; 
import TopHeader from '../../components/TopHeader';

function CreatePost() {
  // Local state to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <>
    <TopHeader headerName="Create Post" tagline="Write Your thoughts..."></TopHeader>
    <div className="lg:max-w-4xl md:max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FiEdit className="mr-2 text-blue-500" /> Create a New Post
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Post Title */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2 font-medium" htmlFor="title">Post Title</label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              required
            />
            <FiEdit className="text-gray-400 mr-2" />
          </div>
        </div>

        {/* Post Category with "Other" Category Input Side by Side */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2 font-medium" htmlFor="category">Post Category</label>
          <div className="flex sm:flex-col md:flex-row md:space-x-4">
            <div className="relative flex-1">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="other">Other</option>
              </select>
              <FiChevronDown className="absolute top-3 right-3 text-gray-400" />
            </div>

            {formData.category === 'other' && (
              <div className="flex-1">
                <input
                  id="otherCategory"
                  name="otherCategory"
                  type="text"
                  value={formData.otherCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter other category"
                  required={formData.category === 'other'}
                />
              </div>
            )}
          </div>
        </div>

        {/* Post Descriptions */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-2 font-medium" htmlFor="description">Post Descriptions</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post description"
            required
          />
        </div>

        {/* Post Button */}
        <button
          type="submit"
          className="flex items-center justify-center px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <AiOutlinePlus className="mr-2" /> Post
        </button>
      </form>
    </div>
    </>
  );
}

export default CreatePost