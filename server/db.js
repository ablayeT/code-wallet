// server/db.js
import { Low } from "lowdb";
import { JSONFile } from "lowdb";

// Initialise la base de données (fichier db.json)
const db = new Low(new JSONFile("db.json"));

async function initDb() {
  // Lecture du fichier JSON
  await db.read();
  // Structure par défaut si le fichier est vide
  db.data ||= {
    fragments: [],
    tags: [],
  };
  // Écrit immédiatement pour s'assurer que db.json existe
  await db.write();
}

export { db, initDb };
