import React, { useState } from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import clsx from "clsx";

import styles from './Home.module.css';


const Home = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      Hello Home Page!!!
    </Box>
  );
};

export default Home;
