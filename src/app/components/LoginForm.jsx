import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { login } from '../utils/authUtils';
import { getAuth } from 'firebase/auth';

export default function LoginForm({ onLoginSuccess, onLoginError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      setIsLoggedIn(true);
    } catch (error) {
      onLoginError(error.message);
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  const handleChange = (event) => {
    
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
    </div>
  );
}

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
  onLoginError: PropTypes.func.isRequired,
};
