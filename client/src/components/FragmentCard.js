// FragmentCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const FragmentCard = ({ fragment, onCardClick, onViewCode }) => {
  return (
    <Card onClick={onCardClick} sx={{ cursor: "pointer" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6">{fragment.title}</Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {fragment.tags?.map((tag, i) => (
              <Chip key={i} label={tag} />
            ))}
          </Box>
        </Box>

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onViewCode(fragment.code);
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default FragmentCard;
