import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/srs.svg"


const Navbar = () => {
    return (
        <nav className="bg-transparent flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <Link to="/">
            <svg className="h-10" viewBox="0 0 100 100">
            <use xlinkHref={`#${Logo.id}`} />
            </svg>
        </Link>

  
        {/* Menu items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/char" className="text-white hover:text-gray-200">
            Char
          </Link>
          <Link to="/exercise" className="text-white hover:text-gray-200">
            Exercise
          </Link>
        </div>
  
        {/* Button */}
        <button className="flex items-center justify-center text-white rounded-full border border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white">
          Menu
        </button>
      </nav>
    )
  }
  
  export default Navbar
  