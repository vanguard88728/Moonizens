import React, { useState } from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import clsx from "clsx";

import styles from './Faq.module.css';


const FAQ = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      Hello FAQ Page!!!
    </Box>
  );
};

export default FAQ;
