import React, { useState } from 'react';
import NewEntryForm from './NewEntryForm';
import NewEntryForm from './newEntry/NewEntryForm';

export default function NewEntryForm({ onAddEntry }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation (can be extended)
    if (!title || !content) {
      setErrorMessage('Please enter a title and content for your entry.');
      return;
    }

    const newEntry = {
      title,
      content,
      date: new Date().toLocaleDateString(), // Add current date
    };

    onAddEntry(newEntry); // Call the callback function with the new entry data
    setTitle('');
    setContent('');
    setErrorMessage(''); // Clear error message after successful submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Entry</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Save Entry</button>
    </form>
  );
}
