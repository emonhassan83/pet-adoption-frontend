import { Container } from "@mui/material";
import DonateBanner from "./components/DonateBanner/DonateBanner";
import DonateSection from "./components/DonateSection/DonateSection";
import Meta from "@/components/Meta/MetaData";

const page = () => {
  return (
    <>
    <Meta
        title="Donate | Petfinder - Pet Adoption Platform & Management System"
        description="This is the Pet Adoption Platform & Management System donate Page where all users can show all donate all information and more."
      />

    <Container sx={{ my: 4 }}>
      <DonateBanner />
      <DonateSection />
    </Container>
    </>
  );
};

export default page;
