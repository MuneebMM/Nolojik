import React from 'react';
// Adjust the import path as needed
import Navbar from '../components/Navbar';
import Joinus from '../components/Joinus';
import Footer from '../components/Footer';
import Image from 'next/image';

const ServicePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-32 px-4">
                {/* Heading */}
                <h1 className="text-6xl font-bold text-center text-gray-800 mb-6">
                    Pioneering the Future of Digital Solutions
                </h1>
                <h1 className="text-6xl text-center font-bold text-gray-800 mb-6">
                    Elevating <span className="text-blue-600 mb-4">Web & Mobile Experiences</span>
                </h1>
                <p className="text-2xl text-gray-600 text-center max-w-2xl py-4 mb-10">
                    Empower Teams, Streamline Workflows, and Opt for the Right Tech.
                    We Make Digital Transformation Seamless.
                </p>

                {/* Search Input */}
                <div className="flex items-center border rounded-md overflow-hidden bg-white">
                    <input
                        type="email"
                        placeholder="Email"
                        className="py-3 px-4 flex-grow border-none outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-full] hover:bg-blue-800 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
                <div className="mt-40 px-4  text-center bg-gray-50">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Welcome to <span className="text-blue-500">Nolojik</span> Innovations Pvt Ltd
                    </h1>
                    <h3 className="font-bold py-4 text-gray-800">
                        Crafting Tomorrows Apps, Today
                    </h3>
                </div>

                <div className="mt-28 pb-6 px-4  text-center bg-gray-50">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Software <span className="text-blue-500">Development & Design</span>
                    </h1>
                </div>
            </div>
            
            {/* Services Section */}
            <div className="flex flex-wrap justify-center gap-1 p-8 bg-gray-50">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/custom-software1.png"
                    alt="UI/UX Design"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">UI/UX Design</h2>
                <p className="text-gray-600">
                Creative UI/UX Design: Crafting intuitive and visually stunning user interfaces that offer an exceptional user experience. Our design philosophy centers on user-centric, engaging designs that enhance usability and drive user satisfaction. We blend aesthetics with functionality to create seamless, interactive, and accessible designs, ensuring your digital presence is both beautiful and effective.
                </p>
              </div>
    
              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/revolution1.png"
                    alt="Front End Development"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Front End Development</h2>
                <p className="text-gray-600">
                Innovative and Cutting-edge Front End Development: We specialize in leveraging the power of React, JavaScript, and jQuery to build state-of-the-art websites. Our approach combines innovation with technical prowess, creating interactive and dynamic user experiences. Stay ahead of the digital curve with our sleek, modern designs that are as functional as they are visually compelling.
                </p>
              </div>
    
              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/mobile-mastry1.png"
                    alt="Backend Development"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Backend Development</h2>
                <p className="text-gray-600">
                Advanced Backend Development: Harness the robust capabilities of Golang, Node.js, and Python to power your digital solutions. We specialize in creating scalable, efficient backend systems that are the backbone of high-performing websites and applications. Our expertise ensures seamless integration, top-notch security, and exceptional performance, setting the foundation for your business`s digital growth.
                </p>
              </div>
            </div>
    
            <div className="flex flex-wrap justify-center gap-1 p-8 bg-gray-50">
              {/* Card 4 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/strategy1.png"
                    alt="Android development"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Android development</h2>
                <p className="text-gray-600">
                Expert Android Development: Dive into the world of Android with our specialized development services in Kotlin and Java. We create highly responsive, robust, and feature-packed apps tailored to the Android platform. Our team combines innovative design with technical excellence, delivering apps that offer an engaging user experience and seamless functionality across all Android devices.
                </p>
              </div>
    
              {/* Card 5 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/testing1.png"
                    alt="IOS Development"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">IOS Development</h2>
                <p className="text-gray-600">
                Premier iOS Development: Elevate your mobile presence with our bespoke iOS app solutions. Specializing in crafting sleek, user-friendly, and feature-rich applications, we harness the latest iOS technologies to bring your vision to life. Experience seamless performance and cutting-edge design, tailored specifically for the iOS ecosystem.
                </p>
              </div>
    
              {/* Card 6 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/cloud-integration1.png"
                    alt="Web Application Development"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Web Application Development</h2>
                <p className="text-gray-600">
                Versatile Flutter and Multiplatform Kotlin Development: Embrace the future of cross-platform applications with our expertise in Flutter and Kotlin Multiplatform. We specialize in building fluid, visually consistent, and highly functional apps that deliver a seamless experience across multiple platforms. Our approach combines the flexibility of Flutter with the robustness of Kotlin, ensuring top-tier performance and a unified codebase for iOS, Android, and web applications.
                </p>
              </div>
            </div>
            
            <div className="mt-40 px-4  text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                <span className="text-blue-500">Cloud</span> and <br/> <span className='text-blue-500'>Advanced Technologies</span>
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-1 p-8 bg-white">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/custom-software1.png"
                    alt="Cloud Computing"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Cloud Computing</h2>
                <p className="text-gray-600">
                Expert Cloud Computing with AWS, GCP, Azure, and Digital Ocean: Unlock the full potential of the cloud with our specialized services across AWS, Google Cloud Platform, Azure, and Digital Ocean. Our team excels in creating tailored cloud solutions that ensure scalability, reliability, and security. From intricate cloud architecture to efficient management, we leverage these leading platforms to optimize your operations, reduce costs, and accelerate digital transformation.
                </p>
              </div>
            </div>
            <div className="mt-40 px-4  text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                <span className="text-blue-500">QA, <br/>Testing</span>  &  <span className='text-blue-500'>Maintainance</span>
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-1 p-8 bg-white">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-80 h-auto">
                <div className="flex justify-center">
                  <Image
                    src="/custom-software1.png"
                    alt="Software QA & Testing"
                    width={96}
                    height={96}
                    className="object-contain mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2">Software QA & Testing</h2>
                <p className="text-gray-600">
                Comprehensive Software Testing and Maintenance: Ensure the highest quality and reliability for your software with our thorough testing and maintenance services. We specialize in identifying and resolving potential issues, ensuring optimal performance and user satisfaction. Our approach includes regular updates, performance optimization, and proactive problem-solving, keeping your software running smoothly and efficiently over time.
                </p>
              </div>
            </div>
            <Joinus/>
            <Footer/>
        </div>
    );
};

export default ServicePage;
