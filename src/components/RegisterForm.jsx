import React, { useState } from "react";
import {registerUser} from '../utils/authUtils';

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
      setError("Registration failed. Please try again.");
      console.error("Registration Error:", err);  // Log the error to the console
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "transparent" }}>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            class="text-black"
            style={{ backgroundColor: 'white' }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            class="text-black"
            style={{ backgroundColor: 'white' }}
          />
          <button type="submit" disabled={loading} style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#234PFF', color: '#fff' }}>
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;