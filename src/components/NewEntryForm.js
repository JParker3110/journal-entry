// NewEntryForm.js
import React from 'react';
import Link from 'next/link';
// import LogoutButton from './LogoutButton';
export default function NewEntryForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = {
      title: formData.get('title'),
      content: formData.get('content'),
    };
    onSubmit(newEntry);
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        name="title"
        placeholder="Title"
        required
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: '#000' }}
      />
      <textarea
        name="content"
        placeholder="Content"
        required
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: '#000' }}
      />
      <button type="submit" style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#234PFF', color: '#fff' }}>
        Add Entry
      </button>
      <Link
              className="m-8 font-bold text-pink-500 hover:text-pink-700"
              href="/"
            >
                <br></br>
              Main
            </Link>
            {/* <LogoutButton /> */}
            {/* <Link
              className="m-1 text-purple-500 hover:text-purple-700"
              href="/Home"
            >
            Journal Entry
            </Link> */}
    </form>
  );
}