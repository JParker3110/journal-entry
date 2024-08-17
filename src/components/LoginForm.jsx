import React, { useState } from "react";
import { login } from '../utils/authUtils'; // Make sure to create this function in your authUtils file
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      window.location.href = "/Management";
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login Error:", err);  // Log the error to the console
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "transparent" }}>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-1 text-pink-600">
              <label htmlFor="login-email" style={{ fontWeight: 'bold', fontSize: '1.150rem' }}>Email:</label>
              <input
                type="email"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-purple-950  w-full"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            <div className="flex-1 text-pink-600">
              <label htmlFor="login-password" style={{ fontWeight: 'bold', fontSize: '1.150rem' }}>Password:</label>
              <input
                type="password"
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-purple-950 w-full"
                style={{ backgroundColor: 'white' }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '10px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#234PFF',
                color: '#fff',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              className="hover:bg-pink-500"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;