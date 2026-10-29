"use client";

import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface FillPetButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const FillPetButton: React.FC<FillPetButtonProps> = ({
  href,
  children,
  onClick,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button
      component={Link}
      href={href}
      onClick={onClick}
      size={isSmallScreen ? "small" : "medium"}
      sx={{
        textTransform: "none",
        fontSize: isSmallScreen ? "0.675rem" : "1rem",
        borderRadius: 20,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "#800ede",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default FillPetButton;
