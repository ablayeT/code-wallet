import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ onToggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO / TITRE "Code Wallet" qui redirige vers /fragments */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/fragments")}
        >
          <Typography variant="h6" color="inherit" sx={{ marginRight: 2 }}>
            Code Wallet
          </Typography>
        </Box>

        {/* Boutons de navigation */}
        <Box>
          <Button color="inherit" onClick={() => navigate("/fragments")}>
            Fragments
          </Button>
          <Button color="inherit" onClick={() => navigate("/tags")}>
            Tags
          </Button>
          <Button color="inherit" onClick={() => navigate("/info")}>
            Info
          </Button>

          {/* Exemple de toggle pour Dark Mode (optionnel) */}
          <Button
            color="inherit"
            onClick={onToggleDarkMode}
            sx={{ marginLeft: 2 }}
          >
            Dark Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
