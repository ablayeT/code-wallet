import React from "react";
import { Box, Typography } from "@mui/material";

const InfoPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Informations</Typography>
      <Typography>
        Bienvenue sur la page des informations. Vous pouvez ajouter du contenu
        ici.
      </Typography>
    </Box>
  );
};

export default InfoPage;
