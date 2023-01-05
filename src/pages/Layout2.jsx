import React from 'react'
import Navbar from '../components/Navbar2'
import { Outlet } from "react-router-dom";

const Layout2 = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout2