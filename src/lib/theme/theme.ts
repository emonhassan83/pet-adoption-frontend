import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6504B5",
    },
    secondary: {
      main: "#666f73",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "6px 20px", //* button padding set
        },
      },
    },
    //* default container set
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },
  //* for using text color
  typography: {
    body1: {
      color: "#0B1134CC",
    //   #1F345D
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
