import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {StyledEngineProvider, ThemeProvider} from "@mui/material";

import useCustomTheme from "./hooks/useCustomTheme";
import Layout from "./layout/Layout";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { customTheme } = useCustomTheme(darkMode);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <div
          style={{
            backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
            height: "100vh",
          }}
        >
          <BrowserRouter>
            <Layout darkMode={darkMode}>
              <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/mint" element={<Home darkMode={darkMode} />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
