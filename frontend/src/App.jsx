import React from 'react'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import AboutUs from './pages/dashboard/AboutUs';


const browserRouter = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children:[
      {
        path:'',
        element: <Dashboard />
      },
      {
        path:'about',
        element: <AboutUs />
      }
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Register />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={browserRouter} /> 
    </>
  )
}

export default App