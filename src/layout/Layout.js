import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Navigation />
      <Box>
          {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
