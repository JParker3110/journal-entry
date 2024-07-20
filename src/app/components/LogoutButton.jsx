import React from 'react';

export default function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    onLogout(false); // Set logged in state to false
  };

  return <button onClick={handleLogout}>Logout</button>;
}
