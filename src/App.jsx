import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import { Globalstyle } from "./global.styles"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/> 
  }
])


export default function App() {

  return (
    <div>
    <RouterProvider router={router} />
    <Globalstyle/>
    </div>
  )
  
}
