import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const InfoPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Titre de la page */}
      <Typography variant="h4" gutterBottom>
        Code Wallet - Informations
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Section des fonctionnalités */}
      <Typography variant="h5" gutterBottom>
        Fonctionnalités
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Code Wallet est une application conçue pour aider les développeurs à
        organiser leurs fragments de code. Voici les principales
        fonctionnalités :
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Gestion des fragments de code (ajout, modification, suppression).
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Classement des fragments à l'aide de tags.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Mode sombre (Dark mode) pour une meilleure expérience visuelle.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Possibilité de copier le code directement dans le presse-papiers.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Drag & drop pour importer rapidement du code depuis un fichier
            texte.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Coloration syntaxique pour une lecture plus claire des fragments.
          </Typography>
        </li>
      </ul>

      <Divider sx={{ my: 2 }} />

      {/* Section sur les développeurs */}
      <Typography variant="h5" gutterBottom>
        À propos des développeurs
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Code Wallet a été développé par un étudiant de l'École Multimédia dans
        le cadre d'un projet de fin d'année. Le projet vise à démontrer la
        maîtrise des compétences techniques en React, Electron et Node.js.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Développeur principal : <strong>Etudiant</strong>.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Section sur le cadre légal */}
      <Typography variant="h5" gutterBottom>
        Cadre légal et gestion des données
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Code Wallet est une application gratuite et fonctionne en mode hors
        ligne. Les fragments de code sont stockés localement sur votre appareil
        et ne sont partagés avec aucun serveur tiers.
      </Typography>
      <Typography variant="body1">
        En utilisant Code Wallet, vous acceptez que vos données restent privées
        et accessibles uniquement depuis votre appareil.
      </Typography>
    </Box>
  );
};

export default InfoPage;
