import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import FragmentPage from "./pages/FragmentPage";
import TagsPage from "./pages/TagsPage";
import FragmentForm from "./components/FragmentForm";
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <Header onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
          <Routes>
            {/* Redirection par défaut de / vers /fragments */}
            <Route path="/" element={<Navigate to="/fragments" />} />

            {/* Pages principales */}
            <Route path="/fragments" element={<FragmentPage />} />
            <Route path="/new" element={<FragmentForm />} />
            <Route path="/fragment/:id" element={<FragmentForm />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
