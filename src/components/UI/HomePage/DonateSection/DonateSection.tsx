import assets from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import DonateButton from "./components/DonateButton";

const DonateSection = () => {
  return (
    <Container sx={{ my: 16 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Impact
        </Typography>
      </Box>

      <Box>
        <Box>
          <Typography component="p" fontSize={18} fontWeight={400}>
            Help Us Save Lives: Support Our Mission
          </Typography>
          <Typography variant="body2" fontSize={18} fontWeight={400}>
            Since early 2022, UWARF has successfully completed four critical
            missions in Ukraine, providing vital care to over 5,500 animals. As
            we look ahead to 2023 and beyond, we are committed to scaling our
            efforts with the ambitious goal of sterilizing 400,000 dogs and cats
            by 2025. At just $44 per animal, your generous support is essential
            to help us reach this milestone and continue saving lives. Together,
            we can make a profound difference.
          </Typography>

          <DonateButton />
        </Box>

        <Box
          sx={{
            width: "40%",
            height: "340px",
            overflow: "hidden",
            position: "relative",
            "&:hover img": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={assets.images.donate_banner}
            width={400}
            height={300}
            alt="Donate Banner"
            style={{
              transition: "transform 0.5s ease",
              width: "100%",
              height: "auto",
              borderRadius: "5px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DonateSection;
