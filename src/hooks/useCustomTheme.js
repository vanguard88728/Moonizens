import { createTheme } from "@mui/material";

const useCustomTheme = () => {
  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      }
    },
    typography: {
      fontFamily: "'Jura', sans-serif",
      h1: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "'Space age', sans-serif",
        color: '#fff',
        fontSize: 96,
        lineHeight: '80px',
        fontWeight: 400
      },
      h2: {
        marginTop: 0,
        marginBottom: 20,
        fontFamily: "'Space age', sans-serif",
        fontSize: 32,
        lineHeight: '36px',
        fontWeight: 400
      },
      h4: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        lineHeight: '24px',
        fontWeight: 700
      }
    },
    }
  );

  return {customTheme};
};

export default useCustomTheme;
