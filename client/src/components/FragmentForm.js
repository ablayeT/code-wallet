import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import {
  getFragmentById,
  addFragment,
  updateFragment,
  deleteFragment,
} from "../apiService";

const FragmentForm = () => {
  const { id } = useParams(); // Récupérer l'ID du fragment (s'il existe)
  const navigate = useNavigate();

  // État pour gérer le fragment
  const [fragment, setFragment] = useState({
    title: "",
    code: "",
    tags: [],
  });

  // Charger les données du fragment existant (si ID est présent)
  useEffect(() => {
    const fetchFragment = async () => {
      if (id) {
        try {
          const data = await getFragmentById(id); // Charger les données depuis l'API
          if (data) {
            setFragment(data); // Pré-remplir le formulaire
          }
        } catch (error) {
          console.error("Erreur lors du chargement du fragment :", error);
        }
      }
    };
    fetchFragment();
  }, [id]);

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFragment({ ...fragment, [name]: value });
  };

  // Gérer les changements dans le champ des tags
  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setFragment({ ...fragment, tags });
  };

  // Sauvegarder ou mettre à jour un fragment
  const handleSubmit = async () => {
    try {
      if (id) {
        await updateFragment(id, fragment); // Mettre à jour un fragment existant
      } else {
        await addFragment(fragment); // Ajouter un nouveau fragment
      }
      navigate("/fragments"); // Retourner à la page des fragments
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
    }
  };

  // Supprimer un fragment existant
  const handleDelete = async () => {
    try {
      if (id) {
        await deleteFragment(id); // Supprimer depuis l'API
        navigate("/fragments"); // Retourner à la page des fragments
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {id ? "Modifier un fragment" : "Ajouter un nouveau fragment"}
      </Typography>

      {/* Champ pour le titre */}
      <TextField
        fullWidth
        label="Titre"
        name="title"
        value={fragment.title}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      {/* Champ pour le code */}
      <TextField
        fullWidth
        label="Code"
        name="code"
        multiline
        rows={4}
        value={fragment.code}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />

      {/* Champ pour les tags */}
      <TextField
        fullWidth
        label="Tags (séparés par des virgules)"
        value={fragment.tags.join(", ")}
        onChange={handleTagsChange}
        sx={{ mb: 2 }}
      />

      {/* Boutons "Supprimer" et "Sauvegarder" */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {id && (
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={{ width: "48%" }}
          >
            Supprimer
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ width: id ? "48%" : "100%" }} // Ajuste la largeur si "Supprimer" est présent
        >
          {id ? "Sauvegarder" : "Créer"}
        </Button>
      </Box>
    </Box>
  );
};

export default FragmentForm;
