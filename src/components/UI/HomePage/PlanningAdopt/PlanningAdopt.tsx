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
    <Box sx={{ backgroundColor: "#f5f0ff", padding: { xs: 4, sm: 8 } }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 1, sm: 4 } }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: { xs: "1.2rem", sm: "2rem" },
            }}
            fontWeight={400}
          >
            PLANNING TO ADOPT A PET?
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {planAdoptData?.map((data: any, index: number) => (
            <Grid item key={index} xs={12} md={4} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Image src={data?.image} alt="Icon" width={150} height={100} />
                <Box sx={{ width: "100%", maxWidth: "400px", mt: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                    }}
                  >
                    {data?.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: "0.675rem",
                        sm: "0.875rem",
                        md: "1rem",
                      },
                    }}
                  >
                    {data.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PlanningAdopt;
