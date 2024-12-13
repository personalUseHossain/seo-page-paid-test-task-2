'use client'

import { faArrowUpRightFromSquare, faBars, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@/styles/Navbar.css'


import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b-[1px] border-primary">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-bold flex items-center border-r-[1px] border-primary px-3 h-[4rem]">
          <img className={'logo ml-7 mr-5'} width={200} height={200} src="https://l5i.fa3.myftpupload.com/wp-content/uploads/2024/10/Logo.png" alt="TriLink Logo" />
        </div>

        {/* Links and Hamburger */}
        <div className="menu flex space-x-6 items-center">
          <a href="#" className="text-primary hover:text-gray-400">Service
            <FontAwesomeIcon className='ml-1' icon={faArrowUpRightFromSquare} />
          </a>
          <a href="#" className="text-primary hover:text-gray-400">Warehouse</a>
          <a href="#" className="text-primary hover:text-gray-400">Technology</a>
          <a href="#" className="text-primary hover:text-gray-400">About <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          <a href="#" className="text-primary hover:text-gray-400">Contact</a>
          <button className='bg-primary text-white p-5'>Client Portal <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="bar-icon">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className='text-3xl' />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="small-menu bg-white p-4">
          <a href="#" className="block py-2">Service</a>
          <a href="#" className="block py-2">Warehouse</a>
          <a href="#" className="block py-2">Technology</a>
          <a href="#" className="block py-2">About</a>
          <a href="#" className="block py-2">Contact</a>
          <a href="#" className="block py-2">Client Portal</a>
        </div>
      )}
    </nav>
  );
}

