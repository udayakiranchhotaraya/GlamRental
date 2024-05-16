import React from 'react'
import { sidebarLinks } from '../constants'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <>
        <div className="h-full w-1/5 border border-gray-300 rounded mr-1 mt-4 mx-1">
            <ul className=''>
                {sidebarLinks.map((sidebarLink, index) => (
                    <li 
                    key={sidebarLink.id}
                    className=''>
                            <Link 
                            to={`${sidebarLink.id}`}
                            className={`block ${index === (sidebarLinks.length - 1) ? '' : 'border-b border-gray-300'} ${index === 0 ? 'rounded-tl rounded-tr' : ''} ${index === (sidebarLinks.length - 1) ? 'rounded-bl rounded-br' : ''} px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700`}>
                                {sidebarLink.title}
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Sidebar