import React from 'react'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import CreatePost from './pages/Posts/CreatePost';
import MyPost from './pages/Posts/MyPost';
import Tabs from './components/Tabs';
import PageNotFound from './pages/services/PageNotFound';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element:<ProtectedRoute><Layout /></ProtectedRoute>,
    children:[
      {
        path:'',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute> 
      },
      {
        path:'create-post',
        element: <ProtectedRoute><CreatePost /></ProtectedRoute> 
      },
      {
        path:'share-post',
        element: <ProtectedRoute><Tabs /></ProtectedRoute> 
      },
      {
        path:'mypost', 
        element: <ProtectedRoute><MyPost /></ProtectedRoute> 
      }
    ]
  },
  {
    path:'*',
    element:<PageNotFound />
  },
  {
    path:'/login',
    element:<Login/>
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