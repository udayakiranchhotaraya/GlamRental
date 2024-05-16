import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div className="container bg-slate-100 min-w-full max-h-full h-dvh overflow-y-auto">
      <Outlet />
    </div>
    </>
  )
}

export default Layout