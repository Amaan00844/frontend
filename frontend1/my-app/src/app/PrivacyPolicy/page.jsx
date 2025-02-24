"use client";

import React from "react";
const NavBar = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

                <ul className="flex justify-center gap-20 text-white font-semibold">
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/home" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            HOME
                        </a>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/ContactUs" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            Contact us
                        </a>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/help" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            Help
                        </a>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/eventlist" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            Go to event list
                        </a>
                    </li>
                </ul>

                {/* Add Events Button */}
                <button className="bg-yellow-300 text-blue-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
                    <a href="/addevent" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">

                        Add Events
                    </a>
                </button>
            </nav>
        </header>
    );
};

const PrivacyPolicy = () => {
    return (
        <div>
        
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
                    <div className="bg-white bg-opacity-20 rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                        <p className="mb-4">
                            At Event Manager, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Personal information (e.g., name, email address, phone number)</li>
                            <li>Event-related information (e.g., event name, date, location)</li>
                            <li>Usage data (e.g., IP address, browser type, pages visited)</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="mb-4">
                            We use your information to:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Provide and improve our services</li>
                            <li>Communicate with you about your events</li>
                            <li>Analyze usage trends and optimize our platform</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                        <p className="mb-4">
                            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2023 Event Manager. All rights reserved.</p>
                <ul className="flex justify-center gap-6">
                    <li><a href="/PrivacyPolicy" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-yellow-300 transition duration-300">Terms of Service</a></li>
                    <li><a href="/ContactUs" className="hover:text-yellow-300 transition duration-300">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div>
            <NavBar />
           <PrivacyPolicy/>
            <Footer />
        </div>
    );
};

export default App;