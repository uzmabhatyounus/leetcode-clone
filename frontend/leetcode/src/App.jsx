import React,{ useState } from 'react'
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Problems from './components/Problems.jsx';
import Submission from './components/Submission';
import Signup from './components/Signup';
import Navbar from "./components/Navbar";
import BlogList from './components/blogs.jsx';

function App() {


  const router = createBrowserRouter([
  {
    path: "/",
    element:<><Home /> <BlogList /></> ,
    
  },
  {
    path:"/problems/:id",
    element: <> <Navbar/><Submission /></>
  },
  {
        path: "/login",
        element:<> <Navbar/><Login /></>
      },
      {
        path:"/problems",
        element:<> <Navbar/><Problems /></>
      },{
        path:"/signup",
        element:<> <Navbar/><Signup /></>
      }
]);

  return (
    <div className='container'>
<RouterProvider router={router} />
    </div>
  )
}

export default App
