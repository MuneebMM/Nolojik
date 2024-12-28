import React from 'react';
// Adjust the import path as needed
import Navbar from '../components/Navbar';
import JoinUs from '../components/Joinus';
import Footer from '../components/Footer';

const BlogPage = () => {
    return (
        <div>
            <Navbar/>
            <h1>Blog</h1>
            <p>Welcome to the Blog page.</p>
            <JoinUs/>
            <Footer/>
        </div>
    );
};

export default BlogPage;
