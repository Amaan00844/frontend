"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    email: "", // Changed from 'id' to 'email'
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/register", formData);

      if (response.status === 200) {
        setSuccess(true); // Show success message
        setFormData({ email: "", password: "" }); // Clear the form

        // Redirect to the login page after 2 seconds
        setTimeout(() => {
          router.push("/Adminlogin");
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data); // Display backend error message
      } else {
        setError("Failed to register. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Admin Registration</h1>
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
              required
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
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Success Message */}
        {success && (
          <div className="mt-4 text-center">
            <p className="text-green-500">Registration successful! Redirecting to login page...</p>
          </div>
        )}

        {/* Login Link */}
        <div className="mt-6 text-center">
          <a href="/Adminlogin" className="text-sm text-gray-200 hover:text-blue-300">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;