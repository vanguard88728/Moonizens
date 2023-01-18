import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@emotion/react";


const Navigation = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Box
      style={{
        border: '1px solid #FEFEFE',
        position: "relative",
        height: 55,
      }}
    >
      {t("NAV_CONNECT_WALLET")}
    </Box>
  );
};

export default Navigation;
