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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
        {/* Mobile and Tablet Header */}
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <Image src="/Logo.png" alt="Logo" width={180} height={50} className="w-auto h-8" />
          <button 
            onClick={toggleNav} 
            className="p-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            {navOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row items-center justify-between px-6 xl:px-24 py-4">
          <div className="flex items-center gap-x-8 xl:gap-x-16">
            <Link
              href="/Homepage"
              className={`nav-link ${
                pathname === '/Homepage' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            <Link
              href="/Service"
              className={`nav-link ${
                pathname === '/Service' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
            >
              Service
            </Link>
            {pathname === '/Blog' ? (
              <Link
                href="/Products"
                className={`nav-link ${
                  pathname === '/Products' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
                }`}
              >
                Products
              </Link>
            ) : (
              <Link
                href="/About"
                className={`nav-link ${
                  pathname === '/About' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
                }`}
              >
                About Us
              </Link>
            )}
            <Link
              href="/Blog"
              className={`nav-link ${
                pathname === '/Blog' ? 'text-blue-600 font-bold' : 'hover:text-blue-400'
              }`}
            >
              Blog
            </Link>
          </div>

          <div className="flex-grow flex justify-center xl:justify-start xl:pl-48">
            <Image src="/Logo.png" alt="Logo" width={180} height={50} />
          </div>

          <div className="flex space-x-4">
            <Link href="/RequestDemo">
              <button className="px-4 xl:px-8 py-2 rounded hover:bg-blue-700 hover:text-white border border-blue-500">
                Request a Demo
              </button>
            </Link>
            <Link href="/Contact">
              <button className="bg-blue-600 text-white px-4 xl:px-6 py-2 rounded hover:bg-blue-800 hover:text-white flex items-center space-x-2">
                <span>Contact</span>
                <Image src="/SendButton.png" alt="Arrow" width={16} height={12} className="w-4 h-3" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile and Tablet Navigation Menu */}
        <div
          className={`${
            navOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          } lg:hidden bg-white absolute top-full left-0 right-0 transition-all duration-300 ease-in-out shadow-lg`}
        >
          <div className="flex flex-col py-2">
            {[
              { href: '/Homepage', label: 'Home' },
              { href: '/Service', label: 'Service' },
              { href: pathname === '/Blog' ? '/Products' : '/About', 
                label: pathname === '/Blog' ? 'Products' : 'About Us' },
              { href: '/Blog', label: 'Blog' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-4 ${
                  pathname === item.href 
                    ? 'text-blue-600 font-bold bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-3 px-6 py-4 border-t border-gray-100">
            <Link 
              href="/RequestDemo" 
              className="w-full"
              onClick={() => setNavOpen(false)}
            >
              <button className="w-full px-6 py-3 rounded hover:bg-blue-700 hover:text-white border border-blue-500 touch-manipulation">
                Request a Demo
              </button>
            </Link>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 flex items-center justify-center space-x-2 touch-manipulation">
              <span>Contact</span>
              <Image src="/SendButton.png" alt="Arrow" width={16} height={12} className="w-4 h-3" />
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}