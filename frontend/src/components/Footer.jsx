import React from 'react'
import { Link } from 'react-router-dom'

import { uspImages } from '../constants'

const Footer = () => {
  return (
    <>
        <div className='bg-glam-bg-footer px-10 font-medium'>
            <div className="usp flex flex-col md:flex-row justify-center py-6">
                {
                    uspImages.map((usp, index) => (
                        <div key={index} className='m-4'>
                            <img src={usp.url} className='mx-auto' style={{ maxWidth: `60%` }} alt="" />
                        </div>
                    ))
                }
            </div>
            <div className="imp-links flex flex-col md:flex-row">

            </div>
            <div className="contact w-4/5 mx-auto flex py-6">
                <div className='text-white text-sm px-3'>
                    <h3 className='font-semibold text-xl/loose'>Contact us</h3>
                    <p className='py-1'>Silicon Hills, Patia, Bhubaneswar</p>
                    <Link to={`tel:+91-9876543210`}>+91-9876543210</Link>
                    <br />
                    <Link to={`mailto:glamrental@mail.com`}>glamrental@mail.com</Link>
                </div>
                <div className='pl-4 hidden md:block'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7805546628515!2d85.80376107383515!3d20.35068231072514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1715545998240!5m2!1sen!2sin" width="400" height="150" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div className="copyright bg-[#312f30] text-white text-xs font-semibold text-center py-5">Copyright &copy; 2024 glamrental.com | All Rights Reserved.</div>
    </>
  )
}

export default Footer