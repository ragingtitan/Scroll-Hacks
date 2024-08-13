import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
         <header className="flex-1 flex flex-col justify-center items-center text-center p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:mt-14 lg:mt-14">
            Transform Your Recordings Into Notes Instantly
          </h1>
          <p className="text-base md:text-lg lg:text-lg mb-8 max-w-xl">
            Use our AI-powered service to convert your voice recordings into
            well-organized, actionable notes. Perfect for meetings, lectures,
            and more.
          </p>
          <button className="md:block lg:block hidden bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg transform transition hover:scale-105">
           <Link to={'/signin'}> Login here to get started</Link>
          </button>
        </header>
    </>
  )
}

export default Hero