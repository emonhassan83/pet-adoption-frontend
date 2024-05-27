import { Box, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets"; 
import BannerButton from "./BannerButton";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative", height: "450px" }}>
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
        <Image src={assets.images.banner} alt="Banner Image" layout="fill" objectFit="cover" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "45%",
          left: 20,
          transform: "translateY(-50%)", 
          zIndex: 2,
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h2" component="h1" fontWeight={600} color="white">
          Adopt a Pet
        </Typography>
        <Typography variant="h6" component="h6" fontWeight={500} color="white" sx={{
            width: '60%'
        }}>
          There are likely hundreds of adoptable cats and dogs in your local animal shelters or rescues right now who would love to join your family.
        </Typography>
        <BannerButton/>
      </Box>
    </Box>
  );
};

export default HeroSection;
