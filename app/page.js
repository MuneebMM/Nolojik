"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// Import Homepage
import Homepage from "./Homepage/page";

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            {/* Move the code below Navbar to above Joinus */}
            <Homepage/>
            <Joinus/>
            <Footer/>
        </div>
    );
}

