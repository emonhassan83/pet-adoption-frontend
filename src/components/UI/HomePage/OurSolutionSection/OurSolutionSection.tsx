import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const cardData = [
  {
    image: assets.images.sol_card_img1,
    title: "Petco Love Adopt",
    sub_title: "Creating families",
    description:
      "Adopt a pet. Grow your family. Fill your home with love. With Petco Love pet adoption, it’s easy to find your match.",
  },
  {
    image: assets.images.sol_card_img2,
    title: "Petco Love Lost",
    sub_title: "Reuniting pets",
    description:
      "Help reunite lost and found pets with their people by snapping a photo and uploading it on Petco Love Lost, or register your pet in case they ever go missing. It’s free!",
  },
  {
    image: assets.images.sol_card_img3,
    title: "Petco Love Care",
    sub_title: "Championing health",
    description:
      "Explore accessible veterinary care, free pet vaccines, and pet cancer resources. Because every pet’s health is priceless.",
  },
];

const OurSolutionSection = () => {
  return (
    <Container sx={{
        my: 16
    }}>
      <Box textAlign="center" >
        <Typography variant="h4" component="h1" fontWeight={700}>Our Solution</Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
        Unleashing the power of Love, together.
        </Typography>
      </Box>

      <Box sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {cardData?.map((data: any, index: number) => (
            <Grid item key={index} md={4}>
              <Box>
                <Image src={data?.image} alt="data" width={500} height={100} />
              </Box>

              <Box sx={{
                width: "500px"
              }}>
              <Typography variant="body2" color="text.secondary">
                {data.sub_title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {data?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurSolutionSection;
