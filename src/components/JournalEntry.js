import React from 'react';
const JournalEntry = ({ entry }) => {
  const { title, content, date } = entry;
  return (
    <div className="journal-entry">
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
    </div>
  );
};
export default JournalEntry;