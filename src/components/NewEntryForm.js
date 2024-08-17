import React, { useState, useEffect } from 'react';
const NewEntryForm = ({ onSubmit, initialEntry = {}, isEditing = false }) => {
  const [title, setTitle] = useState(initialEntry.title || '');
  const [content, setContent] = useState(initialEntry.content || '');
  useEffect(() => {
    if (isEditing) {
      setTitle(initialEntry.title || '');
      setContent(initialEntry.content || '');
    }
  }, [initialEntry, isEditing]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, id: initialEntry.id });
    if (!isEditing) {
      setTitle('');
      setContent('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-bold mb-2">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Enter content"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 border-none rounded bg-green-600 text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-green-700"
      >
        {isEditing ? 'Update Entry' : 'Add Entry'}
      </button>
    </form>
  );
};
export default NewEntryForm;