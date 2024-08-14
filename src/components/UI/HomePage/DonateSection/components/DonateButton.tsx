"use client";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const DonateButton = () => {
  return (
    <Button
      component={Link}
      href="/donate"
      sx={{ fontSize: "10px", fontWeight: "600", height: "30px" }}
      variant="outlined"
      endIcon={<ArrowForwardIcon />}
    >
      Donate Now
    </Button>
  );
};

export default DonateButton;
