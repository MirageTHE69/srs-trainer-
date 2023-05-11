import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/srs.svg";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex-shrink-0">
          <img src="Logo" alt="Logo" className="h-8"></img>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Home 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Home 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Home 4
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0">
          <button className="h-10 bg-slate-100 w-28"></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
