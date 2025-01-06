import React, { useState } from "react";
import { Box, TextField, Button, Chip, Stack } from "@mui/material";

const TagsInput = ({ tags, onAddTag }) => {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim()) {
      onAddTag(newTag.trim());
      setNewTag("");
    }
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <TextField
          label="Enter a new tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddTag}>
          Add Tag
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            color="primary"
            sx={{ marginBottom: 1 }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TagsInput;
