import Navbar from "../components/Navbar";
import Joinus from "../components/Joinus";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Products() {
  
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
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Main Headline */}
                <h1 className="text-3xl md:text-6xl font-bold mb-6 font-sans">
                Transforming Civic Issue <br/><span className="text-gray-400">Management</span>
                </h1>
                {/* Sub Headline */}
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Report and resolve civic issues effortlessly with AI-powered WhatsApp integration.
                </p>
                {/* Input and Button */}
                <div className="flex items-center justify-center space-x-2 max-w-lg w-full">
                  <button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                    Schedule a Demo
                  </button>
                </div>
              </div>
      </section>
      {/* Trusted by Top-tier Companies Section */}
      <section className="w-full py-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">Trusted by Top-tier Product Companies</h2>
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <div className="w-40 h-20 relative">
              <Image src="/bcs.png" alt="Company Logo 1" layout="fill" objectFit="contain" />
            </div>
            <div className="w-40 h-20 relative">
              <Image src="/wpsl.png" alt="Company Logo 2" layout="fill" objectFit="contain" />
            </div>
          </div>
      </section>
      <div className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-20">
        {/* Left Div */}
        <div className="flex-1 p-6 md:p-12"> 
          <h1 className="text-3xl md:text-6xl font-bold">
            Integrations to <br /> platforms that <br /> <span className="text-blue-500">power your business</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Say goodbye to endless hours spent searching for solutions and
            struggling with syntax.
            <br />
            <br />
            Imagine you’re a painter. Your canvas is a blank screen, your brush is
            the Swift programming language...
          </p>
        </div>

        {/* Right Div */}
        <div className="relative flex-1 h-full p-6 md:p-0"> 
        <Image
          src="/phone1.png" 
          alt="App Screenshot"
          width={600} // Example width
          height={600} // Example height
        />
        </div>
      </div>
      <div className="pt-8">
        <p className="text-md md:text-base text-center">
        14 DAYS, FROM ONBOARDING TO CAMPAIGN LAUNCH
        </p>
      </div>
      {/* Main Heading */}
      <div className="mt-4 px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          <span className="text-blue-500">Our Process</span>
        </h1>
      </div>
      <div className="container mx-auto px-6 md:px-11 py-11 relative">
        
        {/* Dashed Line with Numbers */}
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-dashed border-black h-full py-14">
          {/* Number 01 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-0 flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full">
            <span className="text-3xl font-bold text-blue-500">01</span>
          </div>

          {/* Number 02 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-1/4 flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full">
            <span className="text-3xl font-bold text-blue-500">02</span>
          </div>

          {/* Number 03 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-1/2 flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full">
            <span className="text-3xl font-bold text-blue-500">03</span>
          </div>

          {/* Number 04 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-3/4 flex items-center justify-center w-12 h-12 bg-white border-2 rounded-full">
            <span className="text-3xl font-bold text-blue-500">04</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-20">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center relative" style={{ top: '0' }}>
            <div className="w-full md:w-1/2 pr-0 md:pr-10 py-10 px-6 md:px-16">
              <h3 className="text-xl md:text-2xl font-semibold">Onboarding & ICP analysis</h3>
              <p className="mt-4 text-lg">
                During onboarding we work collaboratively to identify the
                prospects that will generate the highest return on investment for
                your business.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative" style={{ top: '25%' }}>
            <div className="w-full md:w-1/2 pl-0 md:pl-10 py-10 px-6 md:px-16">
              <h3 className="text-xl md:text-2xl font-semibold">Onboarding & ICP analysis</h3>
              <p className="mt-4 text-lg">
                During onboarding we work collaboratively to identify the
                prospects that will generate the highest return on investment for
                your business.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center relative" style={{ top: '50%' }}>
            <div className="w-full md:w-1/2 pr-0 md:pr-10 py-10 px-6 md:px-16">
              <h3 className="text-xl md:text-2xl font-semibold">Onboarding & ICP analysis</h3>
              <p className="mt-4 text-lg">
                During onboarding we work collaboratively to identify the
                prospects that will generate the highest return on investment for
                your business.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative" style={{ top: '75%' }}>
            <div className="w-full md:w-1/2 pl-0 md:pl-10 py-10 px-6 md:px-16">
              <h3 className="text-xl md:text-2xl font-semibold">Onboarding & ICP analysis</h3>
              <p className="mt-4 text-lg">
                During onboarding we work collaboratively to identify the
                prospects that will generate the highest return on investment for
                your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-16">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800 hover:text-white flex items-center space-x-2">
          <span>Schedule a Demo</span>
          <Image src="/SendButton.png" alt="Arrow" width={16} height={12} />
        </button>
      </div>

      <div className="flex flex-col items-center min-h-screen bg-white">
        <div className="relative w-full md:w-[1300px] h-[600px] border-2"> {/* Adjust container size */}
          <Image
            src="/Rectanglebg.png" 
            alt="Plane"
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container while maintaining aspect ratio
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-[1000px]"> {/* Adjust diagram width */}
            <Image 
              src="/Coversion.png" 
              alt="Diagram"
              width={1000} // Set width
              height={1000} // Set height
            />
            <div className="mt-4 text-center md:text-left"> {/* Text inside the diagram container */}
              <h2 className="text-2xl md:text-4xl font-bold">Consolidate events across sources.</h2>
              <p className="text-lg text-gray-600"><br/>Combine disparate sources to centralize and simplify your pipeline.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-11">
        <h1 className="text-3xl md:text-5xl font-bold">
          Key <span className="text-blue-500">Features</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white pb-16">
        <Image
          src="/Features1.png" // Replace with your image path
          alt="Features1"
          width={1300} // Adjust width as needed
          height={1300} // Adjust height as needed
        />
      </div>
      <div className="relative min-h-screen w-screen">
        <Image
          src="/Backgroundblue.png" 
          alt="Background"
          width={1800} 
          height={900} 
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-11"> {/* Added pt-20 for top padding */}
          <div className="text-2xl font-bold mb-4 text-white"> {/* Changed text color */}
            BOOK A 15 MINUTE DISCOVERY CALL
          </div>
          <h1 className="text-5xl font-bold mb-8 text-white"> {/* Changed text color */}
            Let’s Chat
          </h1>
          <div className="min-w-screen md:w-3/4 pt-16"> {/* Adjusted width for responsiveness */}
            <Image
              src="/Calender.png" 
              alt="Center Image"
              width={1200} 
              height={1100} 
            />
          </div>
        </div>
      </div>
      <div className="relative min-h-screen w-screen flex items-center justify-center py-20">
        <Image 
          src="/QRCode.png" 
          alt="Center Image"
          width={1200} 
          height={1000} 
        />
      </div>
      <div className="relative min-h-screen w-screen">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-500 mb-4 pt-28">Reach Out to Us</h1>
          <p className="text-gray-700 text-center mb-8">
            From ReactJS and Android applications to Data Science with Python, we <br/>
            specialize in tailoring solutions to meet your business needs.
          </p>

          <div className="flex flex-col md:flex-row gap-8 py-20"> {/* Responsive flex direction */}

            {/* Left Div */}
            <div className="space-y-6 w-full lg:w-1/2">
              
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

            {/* Right Div (Empty for now) */}
            <div className="w-full md:w-1/2"> {/* Set width for responsiveness */}
              <Image 
                src="/Map.png"  
                alt="Map"
                width={600} // Adjust width as needed
                height={400} // Adjust height as needed
              />
            </div>
          </div>
        </div>
      </div>
      <Joinus />
      <Footer />
    </div>
  );
}
