// server/server.js
import express from "express";
import cors from "cors";
import { db, initDb } from "./db.js";

const app = express();
const PORT = 3000;

// Active CORS si le client tourne sur un autre port
app.use(cors());

// Permet de parser le JSON dans les requêtes POST/PUT
app.use(express.json());

// Initialise la base de données avant de définir les routes
await initDb();

/* ------------------ FRAGMENTS ------------------ */

// GET /fragments - Récupère tous les fragments
app.get("/api/fragments", async (req, res) => {
  await db.read();
  res.json(db.data.fragments);
});

// GET /fragments/:id - Récupère un fragment précis par ID
app.get("/api/fragments/:id", async (req, res) => {
  const { id } = req.params;
  await db.read();
  const fragment = db.data.fragments.find((frag) => frag.id === id);
  if (!fragment) {
    return res.status(404).json({ error: "Fragment not found" });
  }
  res.json(fragment);
});

// POST /fragments - Crée un nouveau fragment
app.post("/api/fragments", async (req, res) => {
  await db.read();
  if (!db.data.fragments) {
    db.data.fragments = [];
  }

  const newFragment = req.body;
  // Si l'ID n'est pas fourni, on en génère un
  if (!newFragment.id) {
    newFragment.id = Date.now().toString();
  }

  db.data.fragments.push(newFragment);
  await db.write();
  return res.status(201).json(newFragment);
});

// PUT /fragments/:id - Met à jour un fragment existant
app.put("/api/fragments/:id", async (req, res) => {
  const { id } = req.params;
  const updatedFragment = req.body;

  await db.read();
  const index = db.data.fragments.findIndex((frag) => frag.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Fragment not found" });
  }

  db.data.fragments[index] = {
    ...db.data.fragments[index],
    ...updatedFragment,
  };
  await db.write();

  res.json(db.data.fragments[index]);
});

// DELETE /fragments/:id - Supprime un fragment
app.delete("/api/fragments/:id", async (req, res) => {
  const { id } = req.params;
  await db.read();

  db.data.fragments = db.data.fragments.filter((frag) => frag.id !== id);
  await db.write();

  res.status(204).end();
});

/* ------------------ TAGS ------------------ */

// GET /tags - Récupère tous les tags
app.get("/api/tags", async (req, res) => {
  await db.read();
  res.json(db.data.tags);
});

// POST /tags - Ajoute un nouveau tag
app.post("/api/tags", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Tag name is required" });
  }

  await db.read();
  if (!db.data.tags.includes(name)) {
    db.data.tags.push(name);
    await db.write();
    return res.status(201).json({ name });
  } else {
    return res.status(409).json({ error: "Tag already exists" });
  }
});

// DELETE /tags/:tagName - Supprime un tag
app.delete("/api/tags/:tagName", async (req, res) => {
  const { tagName } = req.params;
  await db.read();

  db.data.tags = db.data.tags.filter((tag) => tag !== tagName);
  await db.write();

  res.status(204).end();
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
