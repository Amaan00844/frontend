"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { token } = useParams();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      const response = await axios.post(`http://localhost:8080/api/reset-password/${token}`, { password });

      if (response.status === 200) {
        setMessage(response.data.message);
        setTimeout(() => {
          router.push("/login"); // Redirect to login page after successful reset
        }, 3000); // Redirect after 3 seconds
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Reset Password</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* New Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Reset Password
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
      </div>
    </div>
  );
};

export default ResetPassword;