'use client'; // Ensure this is the first line if using Next.js app directory
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase.config'; // Ensure the path is correct
import JournalEntry from '@/components/JournalEntry';
import NewEntryForm from '@/components/NewEntryForm';
import LogoutButton from '@/components/LogoutButton';
import { useRouter } from 'next/navigation';
const Management = () => {
  const [entries, setEntries] = useState([]);
  const [editEntry, setEditEntry] = useState(null);
  const router = useRouter();
  const entriesCollectionRef = collection(db, 'entries'); // Reference to 'entries' collection
  // Load entries from Firestore
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getDocs(entriesCollectionRef);
        setEntries(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };
    fetchEntries();
  }, []);
  const handleAddEntry = async (newEntry) => {
    try {
      // Ensure that newEntry does not contain undefined values
      const cleanedEntry = { title: newEntry.title || '', content: newEntry.content || '' };
      const docRef = await addDoc(entriesCollectionRef, cleanedEntry);
      setEntries((prevEntries) => [...prevEntries, { ...cleanedEntry, id: docRef.id }]);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };
  const handleEditEntry = async (updatedEntry) => {
    try {
      const entryDoc = doc(db, 'entries', updatedEntry.id);
      // Ensure that updatedEntry does not contain undefined values
      const cleanedEntry = { title: updatedEntry.title || '', content: updatedEntry.content || '' };
      await updateDoc(entryDoc, cleanedEntry);
      setEntries((prevEntries) =>
        prevEntries.map((entry) =>
          entry.id === updatedEntry.id ? { ...entry, ...cleanedEntry } : entry
        )
      );
      setEditEntry(null); // Close the edit form
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };
  const handleDeleteEntry = async (id) => {
    try {
      const entryDoc = doc(db, 'entries', id);
      await deleteDoc(entryDoc);
      setEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };
  const handleLogout = () => {
    router.push('/'); // Use router.push for navigation
  };
  return (
    <div className="bg-white text-black min-h-screen p-6">
      <div className="flex justify-center mb-6">
        <LogoutButton
          onLogout={handleLogout}
          className="py-2 px-4 border-none rounded bg-white font-bold cursor-pointer transition-colors duration-300 hover:bg-pink-500 text-purple-950"
        >
          Logout
        </LogoutButton>
      </div>
      <h1 className="my-12 text-5xl text-center font-bold text-pink-600">My Journal</h1>
      {editEntry ? (
        <NewEntryForm
          onSubmit={handleEditEntry}
          initialEntry={editEntry}
          isEditing={true}
        />
      ) : (
        <NewEntryForm onSubmit={handleAddEntry} />
      )}
      <h2 className="text-2xl font-semibold mt-8">Entries:</h2>
      {entries.length === 0 ? (
        <p>No entries available.</p>
      ) : (
        entries.map((entry) => (
          <div key={entry.id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <JournalEntry entry={entry} />
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setEditEntry(entry)}
                className="py-2 px-4 border-none rounded bg-blue-600 text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-purple-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEntry(entry.id)}
                className="py-2 px-4 border-none rounded bg-red-600 text-white font-bold cursor-pointer transition-colors duration-300 hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Management;