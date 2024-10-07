// utils/db.js
import { Capacitor } from '@capacitor/core';
import { SQLiteConnection, capSQLiteSet, CapacitorSQLite } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite); // Ensure the connection is initialized properly

// Initialize the SQLite database
export const initializeDB = async () => {
  try {
    const isNative = Capacitor.isNativePlatform();
    const db = await sqlite.createConnection("saved_translations_db", false, "no-encryption", 1);

    if (isNative) {
      await db.open();
    } else {
      console.warn('SQLite is not available on web. Using a fallback method');
    }

    // Create the table for saved translations
    await db.execute(`
      CREATE TABLE IF NOT EXISTS translations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        translationText TEXT NOT NULL
      );
    `);

    return db;
  } catch (error) {
    console.error("Error initializing SQLite DB: ", error);
  }
};

// Save translation to the database
export const saveTranslation = async (translationText) => {
  try {
    const db = await initializeDB();
    await db.run("INSERT INTO translations (translationText) VALUES (?);", [translationText]);
    await sqlite.closeConnection("saved_translations_db");
  } catch (error) {
    console.error("Error saving translation: ", error);
  }
};

// Get all saved translations
export const getSavedTranslations = async () => {
  try {
    const db = await initializeDB();
    const result = await db.query("SELECT * FROM translations;");
    await sqlite.closeConnection("saved_translations_db");
    return result.values;
  } catch (error) {
    console.error("Error retrieving translations: ", error);
  }
};
