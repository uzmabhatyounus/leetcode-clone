import React,{ useState } from 'react'
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Problems from './components/Problems';
import Submission from './components/Submission';

function App() {


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path: "login",
        element:<Login />
      },
      {
        path:"problems",
        element:<Problems />
      }

    ]
  },
  {
    path:"/problems/:id",
    element:<Submission />
  }
]);

  return (
    <div className='container'>
<RouterProvider router={router} />
    </div>
  )
}

export default App
