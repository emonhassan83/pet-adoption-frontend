import assets from "@/assets";
import BannerButton from "@/components/UI/HomePage/HeroSection/components/BannerButton";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const DonateBanner = () => {
  return (
    <Box sx={{ position: "relative", height: "350px" }}>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Image
          src={assets.images.donate_page_banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          style={{ filter: "brightness(70%)" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 2,
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: 16,
          transform: "translateY(-50%)",
          zIndex: 3,
          padding: { xs: 0, sm: 2, md: 4 },
          borderRadius: "8px",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight={900}
          color="white"
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            mt: { xs: 4 },
          }}
          mb={1}
        >
          Donate Now
        </Typography>
        <Typography
          variant="body1"
          color="white"
          fontWeight={400}
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
          }}
          mb={1}
        >
          Your donation to The Animal Foundation goes straight to work helping
          one of the highest volume single-site animal shelters and save more
          lives.
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            display: { xs: "none", sm: "block" },
            mb: {xs: 2, sm: 3}
          }}
        >
          Your donation to The Animal Foundation goes straight to work helping
          the highest volume single-site animal shelter in America save more
          lives. Your tax-deductible charitable donation helps provide shelter,
          medical care, behavioral enrichment, and more for thousands of
          homeless, injured, and neglected animals waiting to find a home and a
          family to love.
        </Typography>

        <BannerButton text="Donate Now" />
      </Box>
    </Box>
  );
};

export default DonateBanner;
