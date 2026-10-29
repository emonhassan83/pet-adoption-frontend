/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import FillPetButton from "../../PetButton/FillPetButton";

const LearnAboutUs = () => {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
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
            Discover the Heart of PetPlace
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
            At PetPlace, we're more than just a pet adoption platform— we’re a
            community of passionate animal lovers. Our mission is to create
            lasting bonds between pets and their owners, ensuring each animal
            finds a loving and caring home.
          </Typography>

          <FillPetButton href="/about-us">Learn More About Us</FillPetButton>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "400px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.9s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            position: "relative",
          }}
        >
          <Image
            src={assets.images.learn_more_banner}
            layout="fill"
            objectFit="cover"
            alt="learn more banner"
            style={{
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default LearnAboutUs;
