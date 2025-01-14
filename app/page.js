"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Joinus from "./components/Joinus";
import Footer from "./components/Footer";
import link from 'next/link';
import Navbar from "./components/Navbar";
// Import Homepage
import Homepage from "./Homepage/page";


export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
        

    return (
        <main>
            {/* Move the code below Navbar to above Joinus */}
            <Homepage/>
           
        </main>
    );
}

