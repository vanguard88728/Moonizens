import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";

import useCustomTheme from "./hooks/useCustomTheme";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/Faq";
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { customTheme } = useCustomTheme(darkMode);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
