import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
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
            <h2 className="text-2xl font-semibold mb-6 text-center">Login to your account</h2>
            <form>
              <div className="mb-4 relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium absolute top-2 left-4 transition-all transform origin-left text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-blue-500"
                >
                  E-mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  className="peer mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium absolute top-2 left-4 transition-all transform origin-left text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-blue-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder=" "
                  className="peer mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-6 flex justify-between items-center">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
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
                Login
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
