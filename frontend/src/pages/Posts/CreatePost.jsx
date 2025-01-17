import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; 
import { FiEdit, FiChevronDown } from 'react-icons/fi'; 
import TopHeader from '../../components/TopHeader';
import Select from "react-select";
import { categoryOptions } from './postCategories';
import useAuthenticated from '../../hooks/useAuthenticated';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import { toast } from 'sonner';
 
function CreatePost() {
  // Local state to manage form inputs
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
  });

  const token = useToken();
  const navigate = useNavigate();
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      category: selectedOption.value,
      otherCategory: selectedOption.value === 'other' ? '' : formData.otherCategory,
    });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/post/create-post`, formData,  {
      headers: {
        "Authorization": token
      }
    });

    console.log(response);
    if(response?.data?.success) {
      toast.success(response.data.message);
      navigate('/');
    }

   } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
   }
  };

  return (
    <>
    <TopHeader headerName="Post" tagline="For sharing what’s on your mind, whether text or anything creative"></TopHeader>
    <div>
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
                  <Select
                      id="category"
                      options={categoryOptions}
                      onChange={handleSelectChange}
                      placeholder="Select a category"
                      className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
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

          {/* Post contents */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2 font-medium" htmlFor="content">Post contents</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
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
    </div>
    </>
  );
}

export default CreatePost