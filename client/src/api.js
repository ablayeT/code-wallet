import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Remplacez par l'URL de votre serveur
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
