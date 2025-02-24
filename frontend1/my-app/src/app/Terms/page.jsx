
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

const TermsAndConditions = () => {
    return (
        <div>
          
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
                    <div className="bg-white bg-opacity-20 rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                        <p className="mb-4">
                            Welcome to Event Manager! By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
                        <p className="mb-4">
                            You agree to use our services only for lawful purposes and in accordance with these terms. You must not:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Infringe on the rights of others</li>
                            <li>Interfere with the operation of our services</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                        <p className="mb-4">
                            You are responsible for:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Providing accurate and complete information</li>
                            <li>Maintaining the confidentiality of your account</li>
                            <li>All activities that occur under your account</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                        <p className="mb-4">
                            Event Manager shall not be liable for any indirect, incidental, or consequential damages arising out of your use of our services.
                        </p>

                        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right to modify these terms at any time. Your continued use of our services constitutes acceptance of the updated terms.
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
           
            <TermsAndConditions/>;
           
            <Footer />
        </div>
    );
};

export default App;