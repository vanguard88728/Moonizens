import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import styles from './Mint.module.css';



const Mint = ({ darkMode }) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container>
        <Grid item>Item1</Grid>
        <Grid item>Item2</Grid>
      </Grid>

      <Box className={styles.messageBox}>
        Message box
      </Box>
    </>
  );
};

export default Mint;
