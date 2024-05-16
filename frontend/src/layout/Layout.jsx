import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="container bg-glam-bg-primary min-w-full h-dvh overflow-y-auto">
        <Outlet />
    </div>
    </>
  )
}

export default Layout