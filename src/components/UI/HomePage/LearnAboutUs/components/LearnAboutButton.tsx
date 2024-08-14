"use client";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const LearnAboutButton = () => {
  return (
    <Button
      component={Link}
      href="/about-us"
      sx={{ fontSize: "10px", fontWeight: "600", height: "30px" }}
      variant="outlined"
      endIcon={<ArrowForwardIcon />}
    >
      Learn More About Us
    </Button>
  );
};

export default LearnAboutButton;
