import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';

import useCustomTheme from './hooks/useCustomTheme';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/Faq';
import './App.css';


function App() {
  const { customTheme } = useCustomTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/faq' element={<FAQ />} />
              </Routes>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
