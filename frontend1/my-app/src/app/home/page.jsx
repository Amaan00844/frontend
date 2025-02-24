"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";

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
          <a href="/Adminlogin" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
            Add Events
          </a>
        </button>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/LatestEvent");

        // Ensure response data exists and is valid
        if (response.status === 200 && response.data) {
          setEvents([response.data]);
        } else {
          setEvents([]); // No events found, set empty array
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.warn("No events found.");
          setEvents([]); // Gracefully handle 404 by setting an empty list
        } else {
          console.error("Error fetching events:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Manage Your Events Effortlessly</h1>
        <p className="text-xl mb-8">Organize, track, and promote your events with our powerful event management tools.</p>

        {/* Post-like section for events */}
        <div className="mt-12 bg-white bg-opacity-20 rounded-lg p-6 shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-6">Recent Events Added by Admin</h2>
          {loading ? (
            <p className="text-gray-200">Loading events...</p>
          ) : events.length > 0 ? (
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white border-opacity-20 hover:border-opacity-40 relative"
                >
                  {/* Participant Button */}
                  <a
                    href={`/participantlist`} // Link to the participants page
                    className="absolute top-4 right-4 bg-yellow-300 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                  >
                    View Participants
                  </a>

                  {/* Frame-like structure */}
                  <div className="absolute inset-0 border-2 border-white border-opacity-10 rounded-lg pointer-events-none"></div>

                  {/* Event Name */}
                  <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                    {event.name}
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <p className="text-gray-200 text-center">
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p className="text-gray-200 text-center">
                      <strong>Location:</strong> {event.place}
                    </p>
                    <p className="text-gray-200 text-left">
                      <strong>Description:</strong> {event.description}
                    </p>
                  </div>

                  {/* Register Now Button */}
                  <a
                    href={`/participantreg`} // Link to the registration page
                    className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 block text-center"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-200">No events found.</p> // ✅ No crash, just a friendly message
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2023 Event Manager. All rights reserved.</p>
        <ul className="flex justify-center gap-6">
          <li>
            <a href="/PrivacyPolicy" className="hover:text-yellow-300 transition duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/Terms" className="hover:text-yellow-300 transition duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/ContactUs" className="hover:text-yellow-300 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;
