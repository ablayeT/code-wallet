import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        padding: 2,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        &copy; 2024 EverydayDev - All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
