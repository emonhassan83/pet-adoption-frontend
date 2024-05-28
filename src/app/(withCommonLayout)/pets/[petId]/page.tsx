import { Box, Button, Container, Typography, Stack } from "@mui/material";
import Image from "next/image";

const PetDetail = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography>{label}</Typography>
    <Typography>{value}</Typography>
  </Box>
);

const Section = ({ title, children }: { title: string; children: any }) => (
  <Box sx={{ mt: 4 }}>
    <Typography textTransform="uppercase" variant="h6" mb={2}>
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
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Box sx={{ width: "65%" }}>
          <Image src={pet.image} height={600} width={600} alt="Pet Image" />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography variant="h4">{pet?.name}</Typography>
            <Box
              sx={{
                color: "green",
                padding: "4px 10px",
                borderRadius: "10px",
                background: "secondary",
              }}
            >
              <Typography>Available to adopt</Typography>
            </Box>
          </Box>
          <Typography textTransform="uppercase" mt={2} mb={1}>
            About
          </Typography>
          <Stack direction="column" gap={0.5}>
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
          <Button fullWidth sx={{ mt: 2 }}>
            Apply to Adopt
          </Button>
        </Box>
      </Box>

      <Section title="Description">
        <Typography>{pet?.description}</Typography>
      </Section>

      <Section title="Favourite Things">
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography>Belly Rubs</Typography>
          <Typography>Lead Walks</Typography>
          <Typography>Playing with Toys</Typography>
          <Typography>Cuddles on Sofa</Typography>
        </Box>
      </Section>

      <Section title="Home Requirements">
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <Typography>Minimum age of children</Typography>
            <Typography>8</Typography>
          </Box>
          <Box>
            <Typography>Can they live with dogs?</Typography>
            <Typography>Can live with a dog</Typography>
          </Box>
          <Box>
            <Typography>Can they live with cats?</Typography>
            <Typography>Cannot live with cats</Typography>
          </Box>
        </Box>
      </Section>

      <Section title="Medical History">
        <Typography>{pet?.medicalHistory}</Typography>
      </Section>

      <Section title="Adoption Requirements">
        <Typography>{pet?.adoptionRequirements}</Typography>
      </Section>
    </Container>
  );
};

export default PetDetailsPage;
