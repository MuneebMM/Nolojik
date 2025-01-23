'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const pathname = usePathname();

  const filterLinks = [
    { name: 'Deep Learning', href: '/deep-learning' },
    { name: 'iOS', href: '/ios' },
    { name: 'AI', href: '/artificial-intelligence' },
    { name: 'Software Dev', href: '/software-development' },
    { name: 'Machine Learning', href: '/machine-learning' },
    { name: 'Android', href: '/android' },
  ];

  return (
    <div>
      <Navbar />
      <section
        className="w-full min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('./wallpaper1.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent"></div>

        {/* Content on the Wallpaper */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20 md:py-52 text-center px-4">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-6xl font-bold mb-6 font-sans">
            Blog
          </h1>

          <div className="w-full flex items-center justify-center py-8 md:py-16">
            {/* Container for the filter bar with hover effect */}
            <div className="
              bg-white
              rounded-lg
              shadow-md
              px-4 md:px-10
              py-6 md:py-10
              w-full
              max-w-6xl
              mx-4 md:mx-auto
              flex
              flex-col
              md:flex-row
              items-center
              justify-center
              space-y-4
              md:space-y-0
              md:space-x-4
              transition-all
              duration-300
              ease-in-out
              transform
              hover:scale-105
              hover:shadow-xl
            ">
              <span className="font-semibold text-lg md:text-lg">Filter By:</span>
              <div className="
                flex 
                flex-wrap 
                justify-center 
                gap-3 
                text-sm 
                md:text-lg
                text-center
                space-x-10
              ">
                {filterLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`
                        nav-link
                        cursor-pointer
                        transition-colors
                        px-2
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

      {/* Rest of the code remains the same as in the previous artifact */}
      <div className="container mx-auto px-4 md:px-16 py-4">
        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start p-4 text-left rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={`/RectangleImage${(index % 3) + 1}.png`}
                  alt={`Rectangle Image ${(index % 3) + 1}`}
                  width={320}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-between w-full mb-2 text-sm text-gray-500">
                <span>Blog</span>
                <span>Jan 12, 2024</span>
              </div>
              <h2 className="text-lg font-bold mb-2">
                {card === 1 && "First iOS App (Hello World)"}
                {card === 2 && "Setting Up Android Studio"}
                {card === 3 && "Random Forests: Ensemble Learning"}
                {card > 3 && "Blog Post Title"}
              </h2>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {card === 1 && "Imagine you are a painter. Your canvas is a blank screen, your brush is the Swift programming language..."}
                {card === 2 && "Imagine you are a chef, ready to create a culinary masterpiece. But before you can start cooking..."}
                {card === 3 && "Imagine you are trying to decide on a movie to watch. You could ask a single friend for a recommendation..."}
                {card > 3 && "A brief description of the blog post will appear here, giving readers a quick preview of the content."}
              </p>
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100 transition">
                Read Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;