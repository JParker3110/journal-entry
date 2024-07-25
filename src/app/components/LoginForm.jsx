import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function LoginForm({ onLoginSuccess, onLoginError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Replace with your actual authentication logic (API call, form submission)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      onLoginSuccess(data); // Call the provided function with login data (e.g., token)
    } catch (error) {
      onLoginError(error.message); // Call the provided function with error message
    } finally {
      setUsername('');
      setPassword('');
    }
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

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginError: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  onLoginError: () => {},
};
