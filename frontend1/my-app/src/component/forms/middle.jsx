import React from 'react';

const NavBar = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Navigation Links */}
                <ul className="flex justify-center gap-20 text-white font-semibold">
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                            HOME
                        </a>
                    </li>
                    <li className="hover:text-yellow-300 transition duration-300">
                        <a href="/contact" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
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

                {/* Add Events Button */}
                <button className="bg-yellow-300 text-blue-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300" >
                <a href="/events" className="py-2 px-4 rounded-lg hover:bg-opacity-20 hover:bg-white">
                           
                        Add Events
                        </a>
                   
                </button>
            </nav>
        </header>
    );
};

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4">Manage Your Events Effortlessly</h1>
                <p className="text-xl mb-8">Organize, track, and promote your events with our powerful event management tools.</p>
                <button className="bg-yellow-300 text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition duration-300">
                    Get Started
                </button>
            </div>
        </section>
    );
};

const EventList = () => {
    const events = [
        { id: 1, name: "Tech Conference 2023", date: "October 15, 2023", location: "San Francisco, CA" },
        { id: 2, name: "Music Festival", date: "November 20, 2023", location: "Austin, TX" },
        { id: 3, name: "Startup Pitch Night", date: "December 5, 2023", location: "New York, NY" },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
                        <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
                        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            View Details
                        </button>
                    </div>
                ))}
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
                    <li><a href="/privacy" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-yellow-300 transition duration-300">Terms of Service</a></li>
                    <li><a href="/contact" className="hover:text-yellow-300 transition duration-300">Contact Us</a></li>
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
            <EventList />
            <Footer />
        </div>
    );
};

export default App;