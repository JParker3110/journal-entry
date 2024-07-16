import React from 'react';

export default function JournalEntry({ entry }) {
  const { date, title, content } = entry;

  return (
    <div className="journal-entry">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </div>
  );
}
