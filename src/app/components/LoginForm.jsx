import React, { useState } from "react";
import { login } from "../utils/authUtils";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await login(email, password);
      // Optionally navigate to another page
      router.push("/home"); // Redirect to home page or dashboard
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Login failed. Please check your email and password.");
      console.error("Error logging in:", err);
    } finally {
      setLoading(false);
    }
  };


  return (
  
        <form onSubmit={handleSubmit}>
          {/* <h2>Login</h2> */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} 
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} 
          />
          <button type="submit">Log In</button>
        </form>
      )}


export default LoginPage;




