import React from 'react'
import { AboutUs, Hero, HimHer, HowItWorks } from '../components';

const Home = () => {
  return (
    <>
    <div className="container h-full mx-auto">
        <div className="container">
            <Hero />
        </div>
        <div className="container w-full">
            <HowItWorks />
        </div>
        <div className="container w-full">
            <HimHer />
        </div>
        <div className="container w-full">
            <AboutUs />
        </div>
    </div>
    </>
  )
}

export default Home