import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {setAuthUser} from "../../redux/authSlice";
import { toast } from 'sonner';

import { useDispatch } from 'react-redux';
import useLoader from "../../hooks/useLoader";
import { ColorRing } from 'react-loader-spinner'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoading, startLoading, stopLoading} = useLoader();

  const [formData, setFormData] = useState({username:'', password:'',rememberme:false});

  const handleFormData = (e) => {
    const {name, type, checked} = e.target;
    setFormData({...formData, [name]: type ==='checkbox' ? checked : e.target.value});
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      startLoading();
      const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
      const response = await axios.post(`${backendBaseUrl}/login`, formData);
      
      if(response.data.success) {
        dispatch(setAuthUser(response.data.user));
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    finally{
      stopLoading();
    }
  }

  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row p-6 md:p-28 h-screen bg-gray-100">
        <div className="flex-1 bg-gradient-to-b from-blue-700 to-blue-400 text-white flex flex-col justify-center items-center p-8 text-center mb-6 md:mb-0 md:flex-none md:w-1/2">
          <h2 className="text-3xl font-semibold">Welcome Back to</h2>
          <div className="text-4xl font-bold my-2">Echo Verse</div>
          <p className="text-sm leading-relaxed">
            Login to access your account and explore new opportunities.
          </p>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-16 text-center">Login to your account</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-8 relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleFormData}
                  value={formData.username}
                  className="peer mt-1 block w-full px-4 py-2 text-md border-none border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
                <label
                  htmlFor="username"
                  className={`block text-sm font-medium absolute left-4 top-2 transition-all transform origin-left text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-[-45%] peer-focus:left-3 ${formData.username != '' ? 'top-[-45%] left-3 text-blue-500' : '' }  peer-focus:text-blue-500`}
                >
                 Username
                </label>
              </div>

              <div className="mb-4 relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleFormData}
                  placeholder=" "
                  className={`peer mt-1 block w-full px-4 py-2 text-md border-none border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none`}
                />
                <label
                  htmlFor="password"
                  className={`block text-sm font-medium absolute left-4 top-2 transition-all transform origin-left text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-gray-400 peer-focus:top-[-40%] peer-focus:left-3 ${formData.password != '' ? 'top-[-40%] left-3 text-blue-500' : '' }  peer-focus:text-blue-500`}
                >
                  Password
                </label>
              </div>

              <div className="mb-6 flex justify-between items-center">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    name="rememberme"
                    onChange={handleFormData}
                    checked={formData.rememberme}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              >
               {isLoading && <ColorRing
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{display:'inline'}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', "#fff", '#abbd81', '#849b87']}
                        />}  Login
              </button>

              <p className="text-sm text-center">
                Don't have an account?{" "}
                <NavLink to="/register" className="text-blue-600 hover:underline">
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
