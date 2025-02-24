"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post("http://localhost:8080/api/forgot-password", { email });

      if (response.status === 200) {
        setMessage(response.data.message);
        setTimeout(() => {
          router.push("/login"); // Redirect to login page after successful submission
        }, 3000); // Redirect after 3 seconds
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send reset link. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Forgot Password</h1>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Success Message */}
        {message && (
          <div className="mt-4 text-center">
            <p className="text-green-500">{message}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <a href="/Adminlogin" className="text-sm text-blue-300 hover:text-blue-400">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;