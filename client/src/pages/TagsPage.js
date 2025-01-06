import React, { useState, useEffect } from "react";
import { getTags, addTag, deleteTag } from "../apiService";
import { Box, Typography, TextField, Button, Chip, Stack } from "@mui/material";

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleAddTag = async () => {
    if (!newTag.trim()) return;
    try {
      await addTag(newTag.trim());
      setNewTag("");
      setTags(await getTags());
    } catch (error) {
      console.error("Error adding tag:", error);
    }
  };

  const handleDeleteTag = async (tagName) => {
    try {
      await deleteTag(tagName);
      setTags(await getTags());
    } catch (error) {
      console.error("Error deleting tag:", error);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manage Tags
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 3 }}
      >
        <TextField
          label="New Tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTag}>
          Add
        </Button>
      </Box>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleDeleteTag(tag)}
            color="primary"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TagsPage;
