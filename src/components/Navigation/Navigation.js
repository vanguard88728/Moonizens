import React, { useState } from "react";
import { Stack, Box, useMediaQuery, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";

import styles from './Navigation.module.css';


const Navigation = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Stack
      style={{
        border: '1px solid #FEFEFE',
        position: "relative",
        height: 55,
      }}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box className={styles.logoWrapper}>
      </Box>

      <Box className={styles.buttonWrapper}>
        <Typography className={styles.buttonCaption}>
          Connect Wallet
        </Typography>
      </Box>
    </Stack>
  );
};

export default Navigation;
