import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Overview, Sidebar } from '../components';

const Dashboard = () => {
  return (
    <>
     <Navbar />
     <div className="container w-full flex mx-auto">
        <Sidebar />
        <div className="hebe container h-full border border-gray-300 rounded mr-1 my-4 mx-1 p-2 overflow-y-auto">
          <Outlet />
        </div>
     </div>
    </>
  )
}

export default Dashboard