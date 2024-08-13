// // Home/page.js
"use client"; 

import React, { useState, useEffect } from 'react';
import JournalEntry from '../components/JournalEntry'; 
import NewEntryForm from '../components/NewEntryForm'; 
import { initializeFirestore } from 'firebase/firestore';

// Enable offline persistence for the web
// initializeFirestore(app, { experimentalForceLongPolling: true }); // Adjust options as needed


export default function Home() {
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

  

  return (
    <div>
      <h1 className="my-12 text-6xl text-center font-bold text-pink-500"> My Journal</h1>
      <NewEntryForm onSubmit={handleAddEntry} />
      <button onClick={handleClearEntries}>Clear All Entries</button>
      {entries.map((entry) => (
        <div key={entry.date}>
          <JournalEntry entry={entry} />
          <button onClick={() => handleDeleteEntry(entry.date)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
