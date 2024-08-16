"use client";
import React, { useState } from 'react';
import JournalEntry from '@/components/JournalEntry';
import NewEntryForm from '@/components/NewEntryForm';
import LogoutButton from '@/components/LogoutButton'; // Adjust path if needed
const Management = () => {
  const [entries, setEntries] = useState([]);
  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };
  const handleDeleteEntry = (date) => {
    setEntries(entries.filter(entry => entry.date !== date));
  };
  const handleClearEntries = () => {
    setEntries([]);
  };
  const handleLogout = () => {
    // Handle logout logic here (e.g., clearing session, cookies, etc.)
    // Redirect to home page
    window.location.href = '/'; // Redirect to home page
  };
  return (
    <div>
      <h1 className="my-12 text-6xl text-center font-bold text-pink-500">My Journal</h1>
      <LogoutButton onLogout={handleLogout} />
      <NewEntryForm onSubmit={handleAddEntry} />
      <button
        onClick={handleClearEntries}
        style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#FF0000', color: '#fff' }}
      >
        Clear All Entries
      </button>
      {entries.map((entry) => (
        <div key={entry.date}>
          <JournalEntry entry={entry} />
          <button
            onClick={() => handleDeleteEntry(entry.date)}
            style={{ padding: '5px', border: 'none', borderRadius: '4px', backgroundColor: '#FF0000', color: '#fff' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Management;