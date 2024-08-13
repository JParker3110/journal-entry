import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state for registration status

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with your actual authentication logic (API call, form submission)
    // Example: const response = await fetch('/api/register', { ... });
    // Handle response and extract relevant data (e.g., user ID)
    // Call onRegister(true) if successful
    // Otherwise, throw an error and handle registration failure

    // Simulating a successful registration (remove this in your actual implementation)
    setIsRegistered(true); // Set registration status
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isRegistered ? (
        // Render user information or redirect to another page
        <p>Registration successful! Welcome, {username}!</p>
      ) : (
        // Render registration form
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} // Set background to transparent
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: 'transparent' }} // Set background to transparent
          />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
