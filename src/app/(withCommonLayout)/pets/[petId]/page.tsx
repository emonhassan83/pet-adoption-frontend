import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import AddAdoptButton from "./components/AddAdoptButton";

const PetDetail = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      // alignItems: "center",
    }}
  >
    <Typography variant="body2">{label}</Typography>
    <Typography
      sx={{
        textAlign: "left",
      }}
      variant="body2"
    >
      {value}
    </Typography>
  </Box>
);

const Section = ({ title, children }: { title: string; children: any }) => (
  <Box sx={{ mt: 4 }}>
    <Typography textTransform="uppercase" variant="body1" mb={1}>
      {title}
    </Typography>
    {children}
  </Box>
);

const PetDetailsPage = async ({ params }: { params: any }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/pets/${params?.petId}`
  );
  const { data: pet } = await res.json();
  // console.log(pet);

  return (
    <>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box
          sx={{
            display: { md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
              overflow: "hidden",
              borderRadius: "10px",
              "&:hover img": {
                transform: "scale(1.1)",
                transition: "transform 0.5s ease-in-out",
              },
            }}
          >
            <Image src={pet.image} height={600} width={600} alt="Pet Image" />
          </Box>

          <Box
            sx={{
              width: { sm: "100%", md: "40%" },
              padding: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Typography variant="h5">{pet?.name}</Typography>
              <Box
                sx={{
                  color: "green",
                  padding: "4px 10px",
                  borderRadius: "10px",
                  backgroundColor: "#faf5ff",
                }}
              >
                <Typography>Available to adopt</Typography>
              </Box>
            </Box>
            <Typography textTransform="uppercase" mt={4} mb={2}>
              About
            </Typography>
            <Stack direction="column" gap={1.5}>
              <PetDetail label="Breed" value={pet?.breed} />
              <PetDetail label="Color" value={pet?.color} />
              <PetDetail label="Age" value={`${pet?.age} years old`} />
              <PetDetail label="Gender" value={pet?.gender} />
              <PetDetail label="Arrived Date" value={pet?.createdAt} />
              <PetDetail label="Arrived From" value={pet?.user?.address} />
              <PetDetail label="Size" value={pet?.size} />
              <PetDetail label="Location" value={pet?.location} />
              <PetDetail label="Rehoming Fee" value={"$180"} />
            </Stack>
            <AddAdoptButton petId={pet?.id} />
          </Box>
        </Box>

        <Section title="Description">
          <Typography variant="body2">{pet?.description}</Typography>
        </Section>

        <Section title="Favorites Things">
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant="body2">
              <GradeIcon fontSize="small" /> Belly Rubs
            </Typography>
            <Typography variant="body2">
              <GradeIcon fontSize="small" /> Lead Walks
            </Typography>
            <Typography variant="body2">
              <GradeIcon fontSize="small" /> Playing with Toys
            </Typography>
            <Typography variant="body2">
              <GradeIcon fontSize="small" /> Cuddles on Sofa
            </Typography>
          </Box>
        </Section>

        <Section title="Home Requirements">
          <Box sx={{ display: "flex", gap: 4 }}>
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Minimum age of children?
              </Typography>
              <Typography variant="body2">8</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Can they live with dogs?
              </Typography>
              <Typography variant="body2">Can live with a dog</Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight={600}>
                Can they live with cats?
              </Typography>
              <Typography variant="body2">Cannot live with cats</Typography>
            </Box>
          </Box>
        </Section>

        <Section title="Medical History">
          <Typography variant="body2">{pet?.medicalHistory}</Typography>
        </Section>

        <Section title="Adoption Requirements">
          <Typography variant="body2">{pet?.adoptionRequirements}</Typography>
        </Section>
      </Container>
    </>
  );
};

export default PetDetailsPage;
