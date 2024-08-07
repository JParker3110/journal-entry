import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate registration logic (replace with your authentication method)
    console.log("Registration attempted:", username, password);
    onRegister(true); // Simulate successful registration (replace with actual logic)
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
  style={{ backgroundColor: 'transparent' }} // Set background to transparent
/>

      <button type="submit">Register</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

RegisterForm.defaultProps = {
  onRegister: () => {},
};
