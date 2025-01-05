import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({username:'', email:'', password:'', isAgreeTermsAndConditions:false});
    const handleFormData = (e) => {
      const {name, type, checked} = e.target;
      // console.log(name, e.target.value);
      setFormData({...formData, [name]: type === "checkbox" ? checked : e.target.value});
    }

    const handleSignupSubmit = async(e) => {
      e.preventDefault();
      try {
        const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
        const response = await axios.post(`${backendBaseUrl}/register`, formData);
        console.log(response);

        if(response.data.success) {
          navigate('/login');
          toast.success("Registration Successfully. Please Login..");
        }

      } catch (error) {
        toast.error(error.response.data.message);       
      }
    }

    return (
    <div className="h-screen w-full">
      <div className="flex p-28 bg-gray-100">
        {/* Left Panel */}
        <div className="flex-1 bg-gradient-to-b from-blue-700 to-blue-400 text-white flex flex-col justify-center items-center p-8 text-center">
          <h2 className="text-3xl font-semibold">Welcome to</h2>
          <div className="text-4xl font-bold my-2">Spacer</div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
  
        {/* Right Panel */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create your account</h2>
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  name="username"
                  onChange={handleFormData}
                  value={formData.username}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleFormData}
                  value={formData.email}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleFormData}
                  value={formData.password}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div className="mb-6">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    name="isAgreeTermsAndConditions"
                    onChange={handleFormData}
                    checked={formData.isAgreeTermsAndConditions}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2">
                    I agree with <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                  </span>
                </label>
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              >
                Sign Up
              </button>
  
              <NavLink to="/login">
                <button
                  type="button"
                  className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign In
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Register;