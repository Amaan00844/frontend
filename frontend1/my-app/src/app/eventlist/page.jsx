import React from 'react';

const NavBar = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Navigation Links */}
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
const EventList = () => {
    const events = [
        {
            id: 1,
            name: "Tech Conference 2023",
            date: "October 15, 2024",
            location: "Kelkar College, Mumbai, Maharashtra",
            description: "Join industry leaders and tech enthusiasts at the Tech Conference 2023. This event will feature keynote speakers, panel discussions, and networking opportunities focused on the latest trends in technology."
        },
        {
            id: 2,
            name: "Music Festival",
            date: "November 20, 2024",
            location: "Rizvi College, Mumbai, India",
            description: "Experience a day filled with music, food, and fun at the Music Festival. Enjoy performances from local bands and artists, food stalls, and interactive activities for all ages."
        },
        {
            id: 3,
            name: "Indi-Go Cultural Fest",
            date: "December 5, 2024",
            location: "IIT Bombay, Mumbai, India",
            description: "Indi-Go is a cultural fest that celebrates the diversity of Indian art and culture. Participate in workshops, enjoy live performances, and explore art exhibitions showcasing talented artists from across the country."
        },
        {
            id: 4,
            name: "Startup Expo 2024",
            date: "January 10, 2025",
            location: "NESCO, Mumbai, India",
            description: "The Startup Expo 2024 is a platform for entrepreneurs to showcase their innovative ideas and products. Network with investors, attend workshops, and gain insights from successful entrepreneurs."
        },
        {
            id: 5,
            name: "Health and Wellness Fair",
            date: "February 15, 2025",
            location: "Juhu Beach, Mumbai, India",
            description: "Join us for a day dedicated to health and wellness. The fair will feature health screenings, fitness demonstrations, nutrition workshops, and wellness products from various vendors."
        },
        {
            id: 6,
            name: "Art and Craft Exhibition",
            date: "March 25, 2025",
            location: "Crawford Market, Mumbai, India",
            description: "Explore the vibrant world of art and craft at this exhibition. Meet local artists, participate in workshops, and purchase unique handmade items to support the local art community."
        },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
                        <p className="text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
                        <p className="text-gray-700 mb-4">{event.description}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
};
const App =()=>{
    return(
        <div>
            <NavBar/>
            <EventList/>
        </div>
    )
}
export default App;