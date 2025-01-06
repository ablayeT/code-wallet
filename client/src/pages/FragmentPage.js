import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import FragmentCard from "../components/FragmentCard";
import CodeModal from "../components/codeModal";
import { getFragments } from "../apiService";

const FragmentPage = () => {
  const [fragments, setFragments] = useState([]);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getFragments();
      setFragments(data);
    })();
  }, []);

  const handleCardClick = (id) => navigate(`/fragment/${id}`);
  const handleViewCode = (code) => {
    setSelectedCode(code);
    setOpenModal(true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" onClick={() => navigate("/new")}>
          New
        </Button>
      </Box>
      {fragments.length === 0 ? (
        <Typography>No fragments yet.</Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {fragments.map((frag) => (
            <FragmentCard
              key={frag.id}
              fragment={frag}
              onCardClick={() => handleCardClick(frag.id)}
              onViewCode={handleViewCode}
            />
          ))}
        </Box>
      )}

      <CodeModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        code={selectedCode}
      />
    </Box>
  );
};

export default FragmentPage;
