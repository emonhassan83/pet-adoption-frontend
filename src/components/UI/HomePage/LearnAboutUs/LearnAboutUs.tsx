/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import LearnAboutButton from "./components/LearnAboutButton";
import assets from "@/assets";
import Image from "next/image";

const LearnAboutUs = () => {
  return (
    <Container
      sx={{
        my: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Typography variant="h4" component="h4" fontWeight={600}>
            PetPlace: More Than Just an Adoption Site
          </Typography>
          <Typography variant="body2" fontWeight={400} sx={{ mt: 1, mb: 3 }}>
            At PetPlace, we’re more than just a pet adoption service - we're a
            team of animal lovers dedicated to creating lasting bonds. With
            years of experience in pet care and welfare, we understand the
            unique personalities and needs of each animal in our care.
          </Typography>

          <LearnAboutButton />
        </Box>

        <Box
          sx={{
            width: "40%",
            height: "300px",
            overflow: "hidden",
            position: "relative",
            "&:hover img": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={assets.images.learn_more_banner}
            width={400}
            height={300}
            alt="learn more banner"
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

export default LearnAboutUs;
