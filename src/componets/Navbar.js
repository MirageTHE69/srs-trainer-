import * as React from 'react';
import { useState } from 'react';
import Abstract from '../images/abstract.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="flex justify-between items-center bg-black p-4 text-white">
    <div class="logo">
      <img src="logo.png" alt="Logo" class="w-12" />
    </div>
    <ul class="flex items-center gap-5">
      <li className="mr-4">Home</li>
      <li className="mr-4">Exercise</li>
      <li className="mr-4">Dashboard</li>
      <li className="mr-4">Chat</li>
    </ul>
    <button class="bg-bluecard text-white py-2 px-4 rounded">Button</button>
  </nav>
  );
};

export default Navbar;
