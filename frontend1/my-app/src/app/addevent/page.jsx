"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"
const AddEventPage = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        place: "",
        description: "",
        date: "", 
    });
    const [error, setError] = useState("");
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

        try {
            const response = await axios.post("http://localhost:8080/api/addevent", formData);
            if (response.status === 201) {
                alert("Event added successfully!");
                router.push("/");
                
            }
        } catch (error) {
            setError("Failed to add event. Please try again.");
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-8">Add New Event</h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white bg-opacity-20 rounded-lg p-8 shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="id" className="block text-lg font-semibold mb-2">
                            Event ID
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter event ID"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">
                            Event Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter event name"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="place" className="block text-lg font-semibold mb-2">
                            Event Place
                        </label>
                        <input
                            type="text"
                            id="place"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter event place"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-lg font-semibold mb-2">
                            Event Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Enter event description"
                            rows="4"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="date" className="block text-lg font-semibold mb-2">
                            Event Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            required
                        />
                    </div>
                    {error && <p className="text-red-300 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-yellow-300 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
                    >
                        Add Event
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEventPage;