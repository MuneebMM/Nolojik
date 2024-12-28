import Image from "next/image";
import Navbar from "../components/Navbar";
import JoinUs from "../components/Joinus";
import Footer from "../components/Footer";

export default function RequestDemo() {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-32 py-32">
            {/* Left Div */}
            <div className="space-y-6 w-full lg:w-1/2">
                <h2 className="text-5xl font-bold">Let us know your <br/> query</h2>
                <p className="text-2xl text-gray-600">
                Our AI-powered tool takes your ideas and turns them into captivating, reader-friendly content that resonates with your audience.
                </p>
                <div className="space-y-4">
                <div className="flex items-center space-x-4 pt-3">
                    <Image src="/Mail.png" alt="Email Icon" width={50} height={50} />
                    <div>
                    <p className="text-2xl font-bold">Email Us</p>
                    </div>
                </div>
                <p className="text-2xl">sales@nolojik.com</p>
                <div className="flex items-center space-x-4 pt-3">
                    <Image src="/Call.png" alt="Call Icon" width={50} height={50} />
                    <div>
                    <p className="text-2xl font-bold">Call Us</p>
                    </div>
                </div>
                <p className="text-2xl">+91 9008108650</p>
                <div className="flex items-center space-x-4 pt-3">
                    <Image src="/Location.png" alt="Location Icon" width={50} height={50} />
                    <div>
                    <p className="text-2xl font-bold">Office Location</p>
                    </div>
                </div>
                <p className="text-2xl">
                        Nolojik Innovations Private Limited, <br />
                        No.56, Kalanagar, Kammagondanahalli, <br />
                        Bangalore-560015
                    </p>
                </div>
            </div>

            {/* Right Div */}
            <div className="bg-white shadow-md rounded-xl p-8 w-full lg:w-2/4 lg:h-auto">
                <h2 className="text-5xl font-bold pb-4">
                  We’ll get in touch <span className="text-blue-600">shortly!</span>
                </h2>
                <form className="mt-6 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                        First Name*
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                    </div>
                    <div className="flex-1">
                    <label htmlFor="lastName" className="block text-sm font-medium">
                        Last Name*
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email*
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                    </div>
                    <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium">
                        Phone*
                    </label>
                    <input
                        id="phone"
                        type="text"
                        placeholder="Phone"
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                    Your Message
                    </label>
                    <textarea
                    id="message"
                    rows="10"
                    placeholder="Message"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>

        <JoinUs/>
        <Footer/>

    </div>
  );
}