import React from 'react';
import PropTypes from 'prop-types';

export default function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    onLogout(false); 
  };

  return <button onClick={handleLogout}>Logout</button>;
}

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

LogoutButton.defaultProps = {
  onLogout: () => {},
};
