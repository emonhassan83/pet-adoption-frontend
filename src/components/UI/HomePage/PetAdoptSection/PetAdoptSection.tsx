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

const PetAdoptSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets?limit=4`
  );
  const { data: pets } = await res.json();
  // console.log(pets);

  return (
    <Container
      sx={{
        my: 12,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Pets Available for Adoption
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          The PETFINDER wonderful adoptable dogs and cats are waiting for you
          right now!
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          View adoptable animals below.
        </Typography>
      </Box>

      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {pets?.map((pet: any) => (
            <Grid item key={pet.id} md={3}>
              <Card sx={{ height: "340px" }}>
                <Box
                  sx={{
                    height: "140px",
                  }}
                >
                  <Image src={pet.image} alt="pet" width={500} height={250} />
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="white"
                  >
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {pet?.age}
                    {" years"}, {" Breed: "}
                    {pet.breed}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {pet?.description?.length > 70
                      ? pet?.description.slice(0, 70) + "..."
                      : pet?.description}
                  </Typography>
                  <Typography variant="body2" color="white" mt={1}>
                    <LocationOnIcon /> {pet.location}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                    mt: -1,
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "medium",
                      padding: "4px 6px",
                      mt: -1,
                    }}
                    variant="text"
                    size="small"
                    component={Link}
                    href={`/pets/${pet?.id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
            }}
          >
            View ALL
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default PetAdoptSection;
