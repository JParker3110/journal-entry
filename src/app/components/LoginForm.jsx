import React, { useState } from 'react';


export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic (replace with your authentication method)
    console.log("Login attempted:", username, password);
    onLogin(true); // Simulate successful login (replace with actual logic)
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}
