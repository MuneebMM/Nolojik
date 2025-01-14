'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Image src="/Logo.png" alt="Logo" width={140} height={40} className="w-auto h-8" />
        <button 
          onClick={toggleNav} 
          className="text-2xl p-2 hover:bg-gray-100 rounded-lg focus:outline-none"
        >
          {navOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center justify-between px-24 py-4">
        <div className="flex items-center gap-x-16">
          <Link
            href="/Homepage"
            className={pathname === '/Homepage' ? 'nav-link text-blue-600 font-bold' : 'hover:text-blue-400'}
          >
            Home
          </Link>
          <Link
            href="/Service"
            className={pathname === '/Service' ? 'nav-link text-blue-600 font-bold' : 'hover:text-blue-400'}
          >
            Service
          </Link>
          {pathname === '/Blog' ? (
            <Link
              href="/Products"
              className={pathname === '/Products' ? 'nav-link text-blue-600 font-bold' : 'hover:text-blue-400'}
            >
              Products
            </Link>
          ) : (
            <Link
              href="/About"
              className={pathname === '/About' ? 'nav-link text-blue-600 font-bold' : 'hover:text-blue-400'}
            >
              About Us
            </Link>
          )}
          <Link
            href="/Blog"
            className={pathname === '/Blog' ? 'nav-link text-blue-600 font-bold' : 'hover:text-blue-400'}
          >
            Blog
          </Link>
        </div>

        <div className="flex-grow flex justify-start pl-48">
          <Image src="/Logo.png" alt="Logo" width={180} height={50} />
        </div>

        <div className="flex space-x-4">
          <Link href="/RequestDemo">
            <button className="px-8 py-2 rounded hover:bg-blue-700 hover:text-white border border-blue-500">
              Request a Demo
            </button>
          </Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 hover:text-white flex items-center space-x-2">
            <span>Contact</span>
            <Image src="/SendButton.png" alt="Arrow" width={16} height={12} className="w-4 h-3" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          navOpen ? 'flex flex-col' : 'hidden'
        } md:hidden bg-white`}
      >
        <div className="flex flex-col py-4">
          <Link
            href="/Homepage"
            className={`px-6 py-3 ${
              pathname === '/Homepage' ? 'text-blue-600 font-bold bg-blue-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => setNavOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/Service"
            className={`px-6 py-3 ${
              pathname === '/Service' ? 'text-blue-600 font-bold bg-blue-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => setNavOpen(false)}
          >
            Service
          </Link>
          {pathname === '/Blog' ? (
            <Link
              href="/Products"
              className={`px-6 py-3 ${
                pathname === '/Products' ? 'text-blue-600 font-bold bg-blue-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => setNavOpen(false)}
            >
              Products
            </Link>
          ) : (
            <Link
              href="/About"
              className={`px-6 py-3 ${
                pathname === '/About' ? 'text-blue-600 font-bold bg-blue-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => setNavOpen(false)}
            >
              About Us
            </Link>
          )}
          <Link
            href="/Blog"
            className={`px-6 py-3 ${
              pathname === '/Blog' ? 'text-blue-600 font-bold bg-blue-50' : 'hover:bg-gray-50'
            }`}
            onClick={() => setNavOpen(false)}
          >
            Blog
          </Link>
        </div>
        
        <div className="flex flex-col gap-3 px-6 py-4 border-t border-gray-100">
          <Link 
            href="/RequestDemo" 
            className="w-full"
            onClick={() => setNavOpen(false)}
          >
            <button className="w-full px-6 py-2 rounded hover:bg-blue-700 hover:text-white border border-blue-500">
              Request a Demo
            </button>
          </Link>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 flex items-center justify-center space-x-2">
            <span>Contact</span>
            <Image src="/SendButton.png" alt="Arrow" width={16} height={12} className="w-4 h-3" />
          </button>
        </div>
      </div>
    </nav>
  );
}