import React, { useState } from 'react'
import dressApiService from '../apiServices/dress.apiServices';
import { Link } from 'react-router-dom';

const StatCard = ({ href, stat, title, body, icon }) => {
    return (
        <Link to={href} className='flex justify-between border border-gray-300 hover:border-black cursor-pointer w-[25%] rounded m-4 px-3 py-1'>
            <div className={`h-full w-2/5`}
                style={{ backgroundImage: `url(${icon})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat` }}
            >
                {/* {icon} */}
            </div>
            <div className={`w-3/5 text-right`}>
                <h2 className="font-bold text-2xl">{stat}</h2>
                <p className='font-bold text-lg'>{title}</p>
            </div>
        </Link>
    )
}

export default StatCard