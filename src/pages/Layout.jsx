import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
   <>
    <Navbar username="Jomari" />
    <h1>asdasd</h1>
    <Outlet />
   </> 
  )
}

export default Layout