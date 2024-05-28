import { Box, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import AboutServices from "./components/AboutServices/AboutServices";
import AboutMembers from "./components/AboutMembers/AboutMembers";

const servicesData = [
    {
      image: assets.images.about_card_img1,
      title: "Creating families",
      sub_title: "Petco Love Adopt",
      description:
        "Bigger smiles. Warmer welcomes. Cozier naps and movie nights. When you adopt a pet, life gets better for you, your family, and the pet you bring home. With Petco Love Adopt, we facilitate adoptions for thousands of dogs, cats, rabbits, and other pets every day. See for yourself.",
    },
    {
      image: assets.images.about_card_img2,
      title: "Championing health",
      sub_title: "Petco Love Care",
      description:
        "Love equals care. Petco Love champions initiatives to keep pets healthy by providing free pet vaccines and affordable treatment options. But we can’t do it alone.",
    }
  ];

const leadershipData = [
    {
      image: assets.images.about_author1,
      name: "Susanne Kogut",
      designation: "President"
    },
    {
      image: assets.images.about_author2,
      name: "Jennifer Schulz",
      designation: "Director, Strategic Partnerships & Public Relations"
    },
    {
      image: assets.images.about_author3,
      name: "Daymond John",
      designation: "Vice Chair"
    },
    {
      image: assets.images.about_author4,
      name: "Dana Puglish",
      designation: "Head of Marketing"
    }
  ];
  

const AboutUsPage = () => {
  return (
    <>
      <Box sx={{ position: "relative", height: "300px", mt: 2 }}>
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
            src={assets.images.about_us}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: 16,
            transform: "translateY(-50%)",
            zIndex: 2,
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            fontWeight={900}
            color="white"
          >
            About us
          </Typography>
        </Box>
      </Box>

      {/* Service section */}
      <AboutServices data={servicesData}/>

      {/* lidership section */}
      <AboutMembers data={leadershipData}/>
    </>
  );
};

export default AboutUsPage;
