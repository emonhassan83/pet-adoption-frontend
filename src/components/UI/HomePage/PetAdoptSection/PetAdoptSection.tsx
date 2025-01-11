import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import FillPetButton from "../../PetButton/FillPetButton";

const PetAdoptSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets?limit=4`
  );
  const { data: pets } = await res.json();
  // console.log(pets);

  return (
    <Container sx={{ my: { xs: 4, sm: 8, md: 12 } }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 6 } }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={800}
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
          }}
        >
          Pets Available for Adoption
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          sx={{
            mt: {xs: 0.5, sm: 1, md: 2},
            fontSize: { xs: 10, sm: 14, md: 18 },
          }}
        >
          The Petfinder wonderful adoptable dogs and cats are waiting for you
          right now!
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          sx={{
            fontSize: { sm: 14, md: 18 },
            display: {xs: "none", sm: "block"}
          }}
        >
          View adoptable animals below.
        </Typography>
      </Box>

      {/* Pet Cards */}
      <Grid container spacing={4}>
        {pets?.map((pet: any) => (
          <Grid item key={pet.id} sm={6} md={3} xs={12}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                },
                backgroundColor: "#f8f9fa",
              }}
            >
              <Box sx={{ height: "250px", overflow: "hidden" }}>
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={500}
                  height={250}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Box>
              <CardContent
                sx={{
                  // padding: 3,
                  textAlign: "left",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                  }}
                  component="div"
                  fontWeight={600}
                  color="primary"
                >
                  {pet.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: { xs: 12, sm: 14 }, mb: {xs: 0.5, sm: 1} }}
                >
                  Age: {pet?.age} years | Breed: {pet.breed}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{fontSize: { xs: 12, sm: 14 }, mb: {xs: 0.5, sm: 1} }}
                >
                  {pet?.description?.length > 70
                    ? pet?.description.slice(0, 70) + "..."
                    : pet?.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  display="flex"
                  alignItems="center"
                  sx={{ fontSize: { xs: 12, sm: 14 } }}
                >
                  <LocationOnIcon fontSize="small" sx={{fontSize: { xs: 14, sm: 18 }, mr: 0.5 }} />{" "}
                  {pet.location}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  paddingBottom: 2,
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  component={Link}
                  href={`/pets/${pet?.id}`}
                  sx={{
                    textTransform: "none",
                    borderRadius: 20,
                    fontSize: {
                      xs: "0.675rem",
                      sm: "0.875rem",
                      md: "1rem",
                    },
                    padding: "6px 12px",
                    mt: {xs: -2, sm: -1},
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* View All Button */}
      <Box sx={{ textAlign: "center", mt: {xs: 3, sm: 6, md: 8} }}>
      <FillPetButton href="/pets">View All Pets</FillPetButton>
      </Box>
    </Container>
  );
};

export default PetAdoptSection;
