import React from "react";
import { Box, Typography, Button, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CodeModal = ({ open, onClose, code }) => {
  const theme = useTheme(); // Utilisation du thème actif (clair ou sombre)

  if (!open) return null; // Si pas ouvert, on n'affiche rien

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Opacité plus élevée pour mode sombre
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300, // Assurez-vous que le modal est au-dessus des autres éléments
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: theme.palette.background.paper, // Adapte au mode clair/sombre
          color: theme.palette.text.primary, // Adapte la couleur du texte
          borderRadius: 2,
          boxShadow: 24,
          padding: 3,
          width: 400,
          maxWidth: "90%", // Responsive pour petits écrans
        }}
      >
        {/* Bouton de fermeture */}
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: theme.palette.text.primary, // Adapte la couleur de l'icône
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

        {/* Titre */}
        <Typography variant="h6" sx={{ mb: 2 }}>
          Code du fragment
        </Typography>

        {/* Contenu du code */}
        <Typography
          component="pre"
          sx={{
            backgroundColor: theme.palette.background.default, // Fond adapté au mode sombre
            color: theme.palette.text.primary, // Texte adapté au mode sombre
            padding: 2,
            borderRadius: 1,
            overflow: "auto",
            maxHeight: "300px", // Ajout d'une hauteur maximale avec défilement si nécessaire
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)", // Ajout d'un effet visuel agréable
          }}
        >
          {code}
        </Typography>

        {/* Bouton Copy */}
        <Button
          variant="contained"
          onClick={handleCopy}
          sx={{ mt: 2 }}
          color="primary"
        >
          Copy
        </Button>
      </Box>
    </Box>
  );
};

export default CodeModal;
