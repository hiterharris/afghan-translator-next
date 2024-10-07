// pages/saved-translations.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { getSavedTranslations } from '../utils/db'; // Import the function to fetch translations

const SavedTranslations = () => {
  const [savedTranslations, setSavedTranslations] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    async function fetchData() {
      const translations = await getSavedTranslations(); // Fetch translations from SQLite DB
      setSavedTranslations(translations);
    }
    fetchData();
  }, []);

  return (
    <div className="SavedTranslations">
      <button onClick={() => router.back()} style={styles.backButton}> {/* Back button */}
        Back
      </button>

      <h2>Saved Translations</h2>
      <ul>
        {savedTranslations?.length > 0 ? (
          savedTranslations?.map((translation) => (
            <li key={translation.id}>{translation.translationText}</li>
          ))
        ) : (
          <p>No saved translations yet.</p>
        )}
      </ul>
    </div>
  );
};

// Basic styling for the back button
const styles = {
  backButton: {
    backgroundColor: '#504ED8',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
    marginBottom: '20px',
  },
};

export default SavedTranslations;
