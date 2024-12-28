import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Joinus from '../components/Joinus';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="container mx-auto px-10 py-16 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    {/* Text Section */}
                    <div className="w-auto md:w-auto font-sans py-44 pl-14">
                        <h1 className="text-6xl font-bold leading-tight">
                            Discover Our Journey
                            <br />
                            Elevating Innovation,
                            <br />
                            Empowering <span className="text-blue-500">Growth</span>
                        </h1>
                    </div>

                    {/* Image Grid Section - Hidden on Mobile */}
                    <div className="hidden md:flex w-auto md:w-auto justify-between px-11 gap-x-4">
                        {/* First tall image */}
                        <div className="w-auto">
                            <Image
                                src="/Elevating1.png"
                                alt="Rocket Image"
                                width={180}
                                height={350}
                                className="h-full object-cover"
                            />
                        </div>

                        {/* Middle column with stacked images */}
                        <div className="w-auto flex flex-col gap-y-8">
                            <Image
                                src="/Elevating2.png"
                                alt="Lightbulb Image"
                                width={180}
                                height={10}
                                className="object-cover"
                            />
                            <Image
                                src="/Elevating3.png"
                                alt="Graph Image"
                                width={180}
                                height={190}
                                className="object-cover"
                            />
                        </div>

                        {/* Last tall image */}
                        <div className="w-auto">
                            <Image
                                src="/Elevating4.png"
                                alt="Arrow Stairs Image"
                                width={180}
                                height={350}
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Welcome to <span className="text-blue-500">Nolojik</span> Innovations Pvt Ltd
              </h1>
              <h3 className="font-bold py-4 text-gray-800">
                Crafting Tomorrows Apps, Today
              </h3>
            </div>
            <div className="w-full flex justify-center items-center pt-16 md:pt-36">
                <div className="w-full md:w-auto">
                    <Image
                        src="/companyvision1.png"
                        alt="company visit"
                        width={1350}
                        height={1500}
                        className="h-full object-cover"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 px-4 md:px-16 py-14">
                <div className="border-4 border-dashed rounded-lg p-6 bg-gray-50">
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                        At Nolojik, we believe in making today’s innovative ideas tomorrow’s transformative solutions. As your partner in technological excellence, we’re dedicated to turning your visionary concepts into impactful applications.
                    </p>
                </div>
                <div className="border-4 border-dashed rounded-lg p-6 bg-gray-50">
                    <h3 className="text-xl font-semibold mb-4">Your Vision, Our Mission</h3>
                    <p className="text-gray-600">
                        Your goals are our driving force. With a blend of your vision and our tech expertise, we’re on a mission to craft not just applications, but futures. Purposeful Innovation: We go beyond traditional app development. Our focus is on creating solutions with lasting value, empowering you with tools for sustainable success.
                    </p>
                </div>
            </div>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
                    Our <span className="text-blue-600">Expertise</span>
                </h1>

                {/* Card 1 */}
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md max-w-4xl mx-auto mb-8">
                    <div className="p-6 flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Navigating Beyond Code</h2>
                        <p className="text-gray-600">
                            Our skill set extends beyond coding. We’re about crafting comprehensive solutions,
                            from intuitive interfaces to scalable architectures.
                        </p>
                    </div>
                    <div className="relative flex-1 w-full h-56 md:h-auto">
                        <Image
                            src="/Rectangleabout2.png" // Replace with your image path
                            alt="Code"
                            width={500}
                            height={300}
                            className="rounded-b-lg md:rounded-r-lg md:rounded-b-none"
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md max-w-4xl mx-auto mb-8">
                    <div className="p-6 flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partnership and Adaptability</h2>
                        <p className="text-gray-600">
                            Your project is our shared journey. We align closely with your goals, ensuring
                            a solution that’s uniquely yours.
                        </p>
                    </div>
                    <div className="relative flex-1 w-full h-56 md:h-auto">
                        <Image
                            src="/Rectangleabout1.png" // Replace with your image path
                            alt="Teamwork"
                            width={500}
                            height={300}
                            className="rounded-b-lg md:rounded-r-lg md:rounded-b-none"
                        />
                    </div>
                </div>

                {/* Centered Text Block */}
                <div className="mt-10 max-w-3xl text-center px-4 py-11">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Why Choose <span className="text-blue-600">Nolojik?</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                    Leading with Tomorrow’s Technology: We’re at the forefront of tech evolution, offering solutions
                    that are not just current but ahead of their time. Strategic Innovation: Our approach anticipates
                    future trends, ensuring your solutions are always a step ahead. Client-Centric Excellence: Your
                    satisfaction drives us. Our commitment is to align our expertise with your needs for outstanding
                    results. Integrity at Our Core: Every line of code reflects our commitment to ethical practices
                    and transparency.
                    </p>
                </div>
            </div>

             {/* Section with Cards */}
            <div className="my-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Get to Know the Amazing People <br/> behind Poppins
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Our AI-powered tool takes your ideas and turns them into captivating, reader-friendly content
                that resonates with your audience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md h-96">
                    <div className="h-48 bg-gray-200 rounded-t-md"></div>
                    <div className="h-auto bg-gray-100 rounded-b-md"></div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md h-96">
                    <div className="h-48 bg-gray-200 rounded-t-md"></div>
                    <div className="h-auto bg-gray-100 rounded-b-md"></div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md h-96">
                    <div className="h-48 bg-gray-200 rounded-t-md"></div>
                    <div className="h-auto bg-gray-100 rounded-b-md"></div>
                </div>
                </div>
            </div>
            <Joinus />
            <Footer />
        </div>
    );
};

export default AboutPage;