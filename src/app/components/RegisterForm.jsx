import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function RegisterForm({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); 
  const handleSubmit = (event) => {
    event.preventDefault();
   

    
    setIsRegistered(true); 
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isRegistered ? (
        
        <p>Registration successful! Welcome, {username}!</p>
      ) : (
        
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
            style={{ backgroundColor: 'transparent' }} 
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
