"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const router = useRouter(); // Initialize the router

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
      const response = await axios.post("http://localhost:8080/api/login", formData);
  
      if (response.status === 200) {
        setShowPopup(true);
        setFormData({ email: "", password: "" }); // Clear the form
        alert(response.data.message); // Show success message from backend
        router.push("/addevent"); // Redirect to the Add Event page
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to login. Please check your credentials.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Admin Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
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
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password and Register Now Links */}
        <div className="mt-6 text-center space-y-2">
          <a href="/forgotpassword" className="text-sm text-gray-200 hover:text-blue-300">
            Forgot your password?
          </a>
          <br />
          <a href="/registernow" className="text-sm text-blue-300 hover:text-blue-400">
            Register Now
          </a>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;