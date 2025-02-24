import React from 'react';
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

const HelpPage = () => {
    const faqs = [
        {
            question: "How do I create an event?",
            answer: "To create an event, navigate to the 'Add Events' section in the navigation bar, fill out the event details, and submit the form."
        },
        {
            question: "Can I edit my events?",
            answer: "Yes, you can edit your events by going to the event list, selecting the event you want to edit, and making the necessary changes."
        },
        {
            question: "How do I contact support?",
            answer: "You can contact support by visiting the 'Contact Us' page and filling out the contact form."
        },
        {
            question: "What types of events can I manage?",
            answer: "You can manage various types of events, including conferences, workshops, and social gatherings."
        },
        {
            question: "Is there a limit to the number of events I can create?",
            answer: "No, there is no limit to the number of events you can create. Feel free to manage as many events as you need."
        }
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Help & Support</h2>
            <p className="text-center mb-8 text-lg text-gray-700">If you have any questions or need assistance, please refer to the FAQs below or contact our support team.</p>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
const App=()=>{
    return(
        <div>
            
            <NavBar/>
            <HelpPage/>
        </div>
    )
}
export default App;