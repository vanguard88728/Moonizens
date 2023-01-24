import React, { useState } from "react";
import { Stack, Box, useMediaQuery, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

import styles from './Navigation.module.css';


const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      App Header
    </Box>
  );
};

export default Navigation;
