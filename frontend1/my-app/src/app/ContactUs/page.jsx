"use client";
import React, { useState } from "react";
import axios from "axios";

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
                        <a href="/events" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            Go to event list
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8080/api/ContactUs", formData);

            if (response.status === 200) {
                setShowPopup(true); 
                setFormData({ name: "", email: "", message: "" }); 
            }
        } catch (error) {
            setError("Failed to send message. Please try again.");
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Hide the popup
    };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </div>
                            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <p className="text-gray-600 mb-4">
                            Have questions or need assistance? Feel free to reach out to us!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-blue-600 mr-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>Email: support@eventmanager.com</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-blue-600 mr-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    ></path>
                                </svg>
                                <span>Phone: +1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-6 h-6 text-blue-600 mr-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                </svg>
                                <span>Address: 123 Event St, Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Success!</h3>
                        <p className="text-gray-700 mb-6">Your message has been submitted successfully.</p>
                        <button
                            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

const App = () => {
    return (
        <div>
            <NavBar />
            <ContactUs />
        </div>
    );
};

export default App;