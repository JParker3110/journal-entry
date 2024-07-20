import React from 'react';
// Assuming LoginForm is in a subdirectory called components
import LoginForm from './components/LoginForm';

const handleLogin = (loginStatus) => setIsLoggedIn(loginStatus); // Assuming setIsLoggedIn is defined elsewhere

export default function JournalEntry({ entry }) {
  const { date, title, content } = entry;

  let isLoggedIn = true; // Replace with actual logic to determine login status

  return (
    <div className="journal-entry">
      <h2>Write here</h2>
      <p className="date">{date}</p>
      <p>{content}</p>

      {/* Conditionally render LoginForm based on login status */}
      {isLoggedIn && <LoginForm onLogin={handleLogin} />}
    </div>
  );
}
