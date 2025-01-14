import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-8xl">
        {/* Top Section */}
        <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:flex-row lg:justify-between">
          {/* Logo Section */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <Image
              src="/Logo.png"
              alt="Nolojik Logo"
              width={220}
              height={40}
              className="w-[180px] md:w-[220px] h-auto"
              priority
            />
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12 text-gray-800">
            <Link 
              href="/Homepage" 
              className="nav-link hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/Service" 
              className="nav-link hover:text-blue-400 transition-colors duration-200"
            >
              Service
            </Link>
            <Link 
              href="/About" 
              className="nav-link hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              href="/Blog" 
              className="nav-link hover:text-blue-400 transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Middle Section */}
        <div className="mt-8 md:mt-12 text-center lg:text-left">
          <p className="text-gray-600 mb-6 leading-relaxed px-4 md:px-0">
            <span className="block md:inline">Empower Teams, Streamline Workflows, and</span>{' '}
            <span className="block md:inline">Opt for the Right Tech- We Make Digital</span>{' '}
            <span className="block md:inline">Transformation Seamless</span>
          </p>
          <div className="text-gray-800 font-medium space-y-1">
            <p>Contact us</p>
            <p className="hover:text-blue-500 transition-colors duration-200">
              +91 9008108650
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <Link 
              href="/terms" 
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-300">|</span>
            <Link 
              href="/privacy" 
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © Copyright 2024 Nolojik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}