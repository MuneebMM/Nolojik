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
            {/* Welcome Section - Mobile Responsive */}
            <div className="px-4 text-center py-8">
                <h1 className="text-2xl md:text-5xl font-bold text-gray-800">
                    Welcome to <span className="text-blue-500">Nolojik</span> Innovations Pvt Ltd
                </h1>
                <h3 className="text-sm md:text-base font-bold py-4 text-gray-800">
                    Crafting Tomorrow's Apps, Today
                </h3>
            </div>

            {/* Company Vision Image - Mobile Responsive */}
            <div className="w-full px-4 flex justify-center items-center py-8">
                <Image
                    src="/companyvision1.png"
                    alt="company visit"
                    width={1350}
                    height={1500}
                    className="w-full max-w-5xl object-cover"
                />
            </div>

            {/* Vision Cards - Mobile Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 py-8">
                {[
                    {
                        title: "Our Vision",
                        description: "At Nolojik, we believe in making today's innovative ideas tomorrow's transformative solutions. As your partner in technological excellence, we're dedicated to turning your visionary concepts into impactful applications."
                    },
                    {
                        title: "Your Vision, Our Mission",
                        description: "Your goals are our driving force. With a blend of your vision and our tech expertise, we're on a mission to craft not just applications, but futures. Purposeful Innovation: We go beyond traditional app development. Our focus is on creating solutions with lasting value, empowering you with tools for sustainable success."
                    }
                ].map((card, index) => (
                    <div key={index} className="border-4 border-dashed rounded-lg p-6 bg-gray-50">
                        <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                        <p className="text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>

            {/* Expertise Section - Mobile Responsive */}
            <div className="bg-gray-50 py-12 px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-10">
                    Our <span className="text-blue-600">Expertise</span>
                </h1>

                {[
                    {
                        title: "Navigating Beyond Code",
                        description: "Our skill set extends beyond coding. We're about crafting comprehensive solutions, from intuitive interfaces to scalable architectures.",
                        image: "/Rectangleabout2.png"
                    },
                    {
                        title: "Partnership and Adaptability",
                        description: "Your project is our shared journey. We align closely with your goals, ensuring a solution that's uniquely yours.",
                        image: "/Rectangleabout1.png"
                    }
                ].map((card, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-md max-w-4xl mx-auto mb-8 overflow-hidden"
                    >
                        <div className="p-6 flex-1 flex flex-col justify-center">
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                                {card.title}
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base flex-grow">
                                {card.description}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 h-56 md:h-auto relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}

                {/* Why Choose Nolojik Section */}
                <div className="text-center px-4 py-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        Why Choose <span className="text-blue-600">Nolojik?</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        Leading with Tomorrow's Technology: We're at the forefront of tech evolution. Strategic Innovation: Our approach anticipates future trends. Client-Centric Excellence: Your satisfaction drives us. Integrity at Our Core: Every line of code reflects our commitment to ethical practices and transparency.
                    </p>
                </div>
            </div>

            {/* Team Section - Mobile Responsive */}
            <div className="my-12 px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                    Meet Our Innovative Team
                </h2>
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8">
                    Passionate technologists transforming complex challenges into breakthrough solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[1,2,3].map((card) => (
                        <div 
                            key={card} 
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
                        >
                            <div className="h-48 md:h-56 bg-gray-200 flex items-center justify-center">
                                <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="p-4 bg-gray-50">
                                <h3 className="font-semibold text-gray-800">Team Member</h3>
                                <p className="text-sm text-gray-600">Role Description</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Joinus />
            <Footer />
        </div>
    );
};

export default AboutPage;