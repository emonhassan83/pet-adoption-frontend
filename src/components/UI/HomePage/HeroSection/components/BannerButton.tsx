"use client";

import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BannerButton = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Button
      variant="outlined"
      size={isSmallScreen ? "small" : "medium"}
      sx={{
        color: "white",
        borderColor: "white",
        fontWeight: 600,
        "&:hover": {
          borderColor: "#800ede",
          color: "#800ede",
        },
      }}
    >
      Learn More
    </Button>
  );
};

export default BannerButton;
