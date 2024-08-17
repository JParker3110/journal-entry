import React from 'react';
const LogoutButton = ({ onLogout, className, children }) => (
  <button onClick={onLogout} className={className}>
    {children}
  </button>
);
export default LogoutButton;