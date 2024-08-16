import React, { useState } from "react";
import { loginUser } from '../utils/authUtils'; // Make sure to create this function in your authUtils file
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
      await loginUser(email, password);
      setEmail("");
      setPassword("");
      // router.push("/dashboard");  // Redirect to dashboard or another page after successful login
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
      console.error("Login Error:", err);  // Log the error to the console
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "transparent" }}>
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black"
            style={{ backgroundColor: 'white' }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-black"
            style={{ backgroundColor: 'white' }}
          />
          <button type="submit" disabled={loading} style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#234PFF', color: '#fff' }}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;