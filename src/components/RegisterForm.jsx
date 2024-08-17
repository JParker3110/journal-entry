import React, { useState } from "react";
import { registerUser } from '../utils/authUtils';
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await registerUser(email, password);
      setEmail("");
      setPassword("");
      // router.push("/login");  // Redirect to login page after successful registration
    } catch (err) {
      setError("Email is already in use. Please try a different email.");
      console.error("Registration Error:", err);  // Log the error to the console
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "transparent" }}>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-6 mb-4">
            <div className="flex flex-col flex-1 text-pink-600">
              <label htmlFor="register-email" style={{ fontWeight: 'bold', fontSize: '1.150rem' }}>Email:</label>
              <input
                type="email"
                id="register-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-purple-950"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            <div className="flex flex-col flex-1 text-pink-600">
              <label htmlFor="register-password" style={{ fontWeight: 'bold', fontSize: '1.150rem' }}>Password:</label>
              <input
                type="password"
                id="register-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="text-purple-950"
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
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;