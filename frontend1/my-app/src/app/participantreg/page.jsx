"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterParticipant = ({ params }) => {
    const { eventId } = params;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });
    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState(false);
    const [uniqueNumber, setUniqueNumber] = useState(null);
    const router = useRouter(); 

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
        setSuccess(false);

        try {
            const response = await axios.post(`http://localhost:8080/api/events/${eventId}/register`, formData);

            if (response.status === 200) {
                setSuccess(true);
                setUniqueNumber(response.data.participant.uniqueNumber);
                setFormData({ name: "", email: "", address: "" });

                
                setTimeout(() => {
                    router.push("/home"); 
                }, 2000); 
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
               
                setError("Participant with this email is already registered for the event.");
            } else {
                
                setError("Registration failed. Please try again.");
            }
            console.error("Registration failed:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Register for Event</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-200">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
                            className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
                {success && (
                    <div className="mt-4 text-center">
                        <p className="text-green-500">Registration successful! Redirecting to home page...</p>
                    </div>
                )}
                {error && (
                    <div className="mt-4 text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterParticipant;