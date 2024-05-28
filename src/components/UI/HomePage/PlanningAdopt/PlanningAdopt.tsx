import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const planAdoptData = [
  {
    image: assets.logo.organization,
    title: "Checklist for new adopters",
    description: "Make the adoption transition as smooth as possible.",
  },
  {
    image: assets.logo.health,
    title: "COVID-19 Resources",
    description:
      "Learn how shelters/rescue groups are adapting. Find out how you can help dogs and cats.",
  },
  {
    image: assets.logo.pet,
    title: "Pet Adoption FAQs",
    description:
      "Get answer to all the you questions you haven’t thought of for your adoption.",
  },
];

const PlanningAdopt = () => {
  return (
    <Box sx={{
        backgroundColor:"#EFEEF1"
    }}>
      <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          PLANNING TO ADOPT
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          All pets deserve Love. We help them find it.
        </Typography>
      </Box>

      <Box sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {planAdoptData?.map((data: any, index: number) => (
            <Grid item key={index} md={4}>
              <Box>
                <Image src={data?.image} alt="Icon" width={150} height={100} />
              </Box>

              <Box sx={{
                width: "500px"
              }}>
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
    </Box>
  );
};

export default PlanningAdopt;
