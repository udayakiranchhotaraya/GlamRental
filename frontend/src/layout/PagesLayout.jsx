import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Cart } from '../components'

const PagesLayout = () => {
  return (
    <>
    {/* <div className="flex flex-col"> */}
        <Navbar />
        <div className="container mx-auto">
            <Outlet />
        </div>
        {/* <Cart /> */}
        <Footer />
    {/* </div> */}
    </>
  )
}

export default PagesLayout