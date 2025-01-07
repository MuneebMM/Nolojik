'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const pathname = usePathname(); // Get the current route

  // Define your filter links here
  const filterLinks = [
    { name: 'Deep Learning', href: '/deep-learning' },
    { name: 'iOS', href: '/ios' },
    { name: 'Artificial Intelligence', href: '/artificial-intelligence' },
    { name: 'Software Development', href: '/software-development' },
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Android', href: '/android' },
  ];

  return (
    <div>
      <Navbar />
      <section
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('./wallpaper1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Content on the Wallpaper */}
        <div className="relative z-10 flex flex-col items-center justify-center py-52 text-center px-4">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-6xl font-bold mb-6 font-sans">
            Blog
          </h1>

          <div
            className="
              h-auto
              w-full
              bg-cover bg-center
              flex
              items-center
              justify-center
              py-16
              border-black
            "
          >
            {/* Container for the filter bar */}
            <div
              className="
                bg-white
                rounded-lg
                shadow-md
                px-10
                py-10
                flex
                justify-between
                items-center
                space-x-4
              "
            >
              <span className="font-semibold">Filter By:</span>
              <div className="flex text-lg space-x-10">
                {/* Map through our filter links */}
                {filterLinks.map((link) => {
                  // Determine if this link is "active"
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        nav-link
                        cursor-pointer
                        transition-colors
                        ${
                          isActive
                            ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                            : 'hover:text-blue-600'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-16 py-4">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Card 1 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage1.png"
                alt="Rectangle Image 1"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Jan 12, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">First iOS App (Hello World)</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a painter. Your canvas is a blank screen, your brush is the Swift programming language...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage2.png"
                alt="Rectangle Image 2"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Feb 5, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Setting Up Android Studio</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a chef, ready to create a culinary masterpiece. But before you can start cooking...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage3.png"
                alt="Rectangle Image 3"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Mar 20, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Random Forests: Ensemble Learning</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are trying to decide on a movie to watch. You could ask a single friend for a recommendation...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-16 py-4">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Card 1 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage1.png"
                alt="Rectangle Image 1"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Jan 12, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">First iOS App (Hello World)</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a painter. Your canvas is a blank screen, your brush is the Swift programming language...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage2.png"
                alt="Rectangle Image 2"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Feb 5, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Setting Up Android Studio</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a chef, ready to create a culinary masterpiece. But before you can start cooking...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage3.png"
                alt="Rectangle Image 3"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Mar 20, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Random Forests: Ensemble Learning</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are trying to decide on a movie to watch. You could ask a single friend for a recommendation...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-16 py-4">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Card 1 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage1.png"
                alt="Rectangle Image 1"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Jan 12, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">First iOS App (Hello World)</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a painter. Your canvas is a blank screen, your brush is the Swift programming language...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage2.png"
                alt="Rectangle Image 2"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Feb 5, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Setting Up Android Studio</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are a chef, ready to create a culinary masterpiece. But before you can start cooking...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md">
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/RectangleImage3.png"
                alt="Rectangle Image 3"
                width={320}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
              <span>Blog</span>
              <span>Mar 20, 2024</span>
            </div>
            <h2 className="text-lg font-bold mb-2">Random Forests: Ensemble Learning</h2>
            <p className="text-gray-700 mb-4">
              Imagine you are trying to decide on a movie to watch. You could ask a single friend for a recommendation...
            </p>
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
              Read Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;

