'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
                We'd love to hear from you. Let's get in touch!
            </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Contact Information */}
                <div className="bg-blue-600 text-white p-8 md:w-1/3">
                <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <EnvelopeIcon className="h-6 w-6 mr-2" />
                        <span>sales@nolojik.com</span>
                    </div>
                    <div className="flex items-center">
                        <PhoneIcon className="h-6 w-6 mr-2" />
                        <span>+91 9008108650</span>
                    </div>
                    <div className="flex items-center">
                        <MapPinIcon className="h-6 w-6 mr-2" />
                        <span>Nolojik Innovations Private Limited,<br/>
                            No.56, Kalanagar, Kammagondanahalli,<br/>
                            Bangalore-560015
                        </span>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="h-6 w-6 mr-2" />
                        <span>Mon-Fri: 9am - 5pm</span>
                    </div>
                    </div>
                </div>


                </div>

                {/* Contact Form */}
                <div className="p-8 md:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        className="mt-1 px-2 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        required
                        className="mt-1 px-2 block w-full rounded-md border border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    </div>

                    <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>

            {/* Map Section */}
            <div className="mt-12 rounded-lg shadow-lg overflow-hidden">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9243.834434181115!2d77.5316069933891!3d13.064060873558425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2324d0916aa7%3A0x21b7eac4f8ee9d94!2sNolojik%20innovations%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738754380478!5m2!1sen!2sin"
            title="Company Location"
            width="100%"
            height="400"
            className="filter grayscale(50%) contrast(1.2) opacity(0.9)"
          ></iframe>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ContactPage;