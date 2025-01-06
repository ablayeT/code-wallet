import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CodeModal = ({ open, onClose, code }) => {
  if (!open) return null; // Si pas ouvert, on n'affiche rien

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "white",
          padding: 3,
          width: 400,
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Code du fragment
        </Typography>
        <Typography component="pre" sx={{ backgroundColor: "#f0f0f0", p: 2 }}>
          {code}
        </Typography>
        <Button variant="contained" onClick={handleCopy} sx={{ mt: 2 }}>
          Copy
        </Button>
      </Box>
    </Box>
  );
};

export default CodeModal;
