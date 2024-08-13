import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import OpenNavbarIcon from "../assets/OpenNavbar.svg";
import { Link,useLocation } from "react-router-dom";
const Navbar = () => {
  const [OpenNavbar, setOpenNavbar] = useState(false);
  const [OpenMobileNavbar, setOpenMobileNavbar] = useState(false);
  const location = useLocation();
  return (
    <div className="fixed w-full z-50">
      <nav className={`md:bg-gradient-to-r from-blue-500 to-purple-600 lg:bg-gradient-to-r from-blue-500 to-purple-600 p-6`}>
        <button onClick={()=>{setOpenMobileNavbar(!OpenMobileNavbar)}} className={`top-2 fixed right-2 md:hidden lg:hidden bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg`}>
          <svg className={`${OpenMobileNavbar?"hidden":"block"}`}
            width={22}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>
        <div
          className={`container md:flex lg:flex mx-auto hidden justify-between items-center ${
            OpenNavbar ? "" : "hidden"
          }`}
        >
          {/* Title Section */}
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
            <span className="text-blue-300">AI</span> Notes Maker
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            
            <Link 
              to='/'
              className={`${location.pathname==='/'?"text-blue-400":"text-white"} relative  text-lg font-medium hover:text-blue-300 transition duration-300`}
            >
              Home
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 scale-x-0 origin-left transition transform duration-300 hover:scale-x-100"></div>
            </Link>
            <Link
              to='/signup'
              className={`${location.pathname==='/signup' || location.pathname==='/signin'?"text-blue-400":"text-white"} relative  text-lg font-medium hover:text-blue-300 transition duration-300`}
            >
              Signup
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 scale-x-0 origin-left transition transform duration-300 hover:scale-x-100"></div>
            </Link>
            <Link
              to='/pricing'
              className={`${location.pathname==='/pricing'?"text-blue-400":"text-white"} relative  text-lg font-medium hover:text-blue-300 transition duration-300`}
            >
              Pricing
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 scale-x-0 origin-left transition transform duration-300 hover:scale-x-100"></div>
            </Link>
            <Link
              to='/contact'
              className={`${location.pathname==='/contact'?"text-blue-400":"text-white"} relative  text-lg font-medium hover:text-blue-300 transition duration-300`}
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 scale-x-0 origin-left transition transform duration-300 hover:scale-x-100"></div>
            </Link>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-blue-700 transition duration-300">
              <Link to={'/docs'}>Documentation</Link> 
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setOpenNavbar(!OpenNavbar);
              }}
              className="outline-none mobile-menu-button"
            ></button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={` right-0 duration-200 mobile-menu top-0 fixed md:hidden lg:hidden`}
      >
        <button
          onClick={() => {
            setOpenMobileNavbar(!OpenMobileNavbar);
          }}
          className={`${
            OpenMobileNavbar ? "z-10" : "hidden"
          } p-2 transition duration-300 fixed top-2 right-2`}
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <ul
          className={`${
            OpenMobileNavbar ? "w-[60%] p-6" : "w-0"
          } bg-gradient-to-r from-blue-500 to-purple-600 text-center right-0 h-full duration-200 mobile-menu top-0 fixed md:hidden lg:hidden flex flex-col gap-1`}
        >
          <div className="text-3xl text-center md:text-2xl lg:text-3xl font-bold text-white">
            <span className="text-blue-300">AI</span> Notes Maker
          </div>
          <li className="active">
            <a
              to=''
              className="block text-white text-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            Login
          </li>
          <li>
            <a
              to=''
              className="block text-white text-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              to=''
              className="block text-white text-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              to=''
              className="block text-white text-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
          <div className="">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold hover:bg-blue-700 transition duration-300 hover:scale-105">
             Docs
            </button>
          </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
