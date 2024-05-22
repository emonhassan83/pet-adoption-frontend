"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </Provider>
  );
};

export default Providers;
