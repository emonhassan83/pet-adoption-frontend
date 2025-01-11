import assets from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import FillPetButton from "../../PetButton/FillPetButton";

const DonateSection = () => {
  return (
    <Container
      sx={{
        my: { xs: 4, sm: 8, md: 12 },
        backgroundColor: "#f5f0ff",
        borderRadius: "8px",
        padding: { xs: 2, sm: 4, md: 6 },
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <Box textAlign="center" mb={6}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Impact
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          Help Us Save Lives: Support Our Mission
        </Typography>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          pt: {xs: 1, md: 0},
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: { xs: "1.2rem", sm: "2rem" },
            }}
            fontWeight={700}
          >
            Support Our Life-Saving Mission
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            sx={{
              mt: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 1.5, md: 3 },
              fontSize: { xs: 10, sm: 14, md: 18 },
              color: "text.secondary",
            }}
          >
            Since early 2022, UWARF has successfully completed four critical
            missions in Ukraine, providing vital care to over 5,500 animals. As
            we look ahead to 2023 and beyond, we are committed to scaling our
            efforts with the ambitious goal of sterilizing 400,000 dogs and cats
            by 2025. At just $44 per animal, your generous support is essential
            to help us reach this milestone and continue saving lives. Together,
            we can make a profound difference.
          </Typography>

          <FillPetButton href="/donate">Donate Now</FillPetButton>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: "400px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            position: "relative",
            transition: "transform 0.9s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Image
            src={assets.images.donate_banner}
            layout="fill"
            objectFit="cover"
            alt="Donate Banner"
            style={{
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DonateSection;
