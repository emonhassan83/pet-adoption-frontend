"use client";

import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const BannerButton = () => {
  return (
    <Box mt={2}>
      <Button endIcon={<SendIcon />}>View Details</Button>
    </Box>
  );
};

export default BannerButton;
