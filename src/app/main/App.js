import React, { useState } from 'react';
import JournalEntry from './JournalEntry';
import NewEntryForm from './NewEntryForm';

export default function App() {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="journal-app">
      <h1>My Journal</h1>
      <ul className="entries">
        {entries.map((entry) => (
          <JournalEntry key={entry.date} entry={entry} />
        ))}
      </ul>
      <NewEntryForm onAddEntry={handleAddEntry} />
    </div>
  );
}
