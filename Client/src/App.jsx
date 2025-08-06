import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './component/Login';
import Register from './component/Register';

function App() {
  
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Login />
    },
    {
      path : "/register",
      element : <Register />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
