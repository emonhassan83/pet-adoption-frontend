import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const SectionInfo = [
  {
    heading: "Support Born Free Today",
    subheading:
      "Every year, Born Free rescues, campaigns for and protects thousands of wild animals around the world. With your support we can continue to work tirelessly to ensure that all wild animals, whether living in captivity or in the wild, are treated with compassion and respect and are able to live their lives according to their needs.",
  },
  {
    heading: "Sponsor A Pet",
    subheading:
      "Animals in our shelter need all the love and support they can get. You may not be able to adopt at this time, but you can always Sponsor A Pet, so other potential adopters know that this pet is special enough to be sponsored! When you Sponsor A Pet, we send you a card with the pet’s photo and formation. A sign is then placed on the animal’s cage acknowledging your sponsorship. To Sponsor A Pet.",
  },
];

const DonateSection = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {SectionInfo.map((info, index) => (
        <Box sx={{ mb: { xs: 2, md: 4 }, p: { xs: 1, sm: 2 } }} key={index}>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{
              fontSize: { xs: "1.2rem", sm: "2rem" },
              mb: { xs: 1, md: 2 },
              color: "#333",
            }}
          >
            {info?.heading}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              mb: { xs: 1, sm: 2, md: 3 },
              fontSize: { xs: 10, sm: 14, md: 18 },
            }}
          >
            {info?.subheading}
          </Typography>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          maxHeight: "400px",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f8f9fa",
          p: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            "&:hover img": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={assets.images.about_us_blog3}
            alt="Donate Section Image"
            width={600}
            height={300}
            style={{
              objectFit: "cover",
              borderRadius: 10,
              transition: "transform 0.9s ease",
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1.2rem", sm: "2rem" },
            }}
            gutterBottom
          >
            Enrichment Fund
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 10, sm: 14, md: 18 },
            }}
            color="textSecondary"
            gutterBottom
          >
            CHA is proud to have an Enrichment Fund which dedicates funding to
            send dogs on outings and purchase interactive toys and fun items for
            our dogs and cats. Each animal adjusts differently to life at the
            shelter and this program allows the dogs and cats that need
            distraction to receive extra enrichment.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 10, sm: 14, md: 18 },
            }}
            color="textSecondary"
            gutterBottom
          >
            Donate to our Enrichment Fund
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            sx={{
              textTransform: "none",
              borderRadius: 20,
              fontSize: {
                xs: "0.675rem",
                sm: "0.875rem",
                md: "1rem",
              },
              padding: "6px 12px",
            }}
          >
            Donate
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 4, p: { xs: 1, sm: 2 } }}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ mb: 2, fontSize: { xs: "1.2rem", sm: "2rem" }, color: "#333" }}
        >
          Support Needed
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 10, sm: 14, md: 18 },
          }}
          color="textSecondary"
        >
          Donate here to be an important part of the August 2023 mission to
          sterilize, vaccinate and microchip over 2,000 abandoned pets in
          Ukraine. Every donation is vital, we sincerely appreciate all
          contributions! <br />
          Share our story! This mission will only be possible if we are able to
          reach 1,000s more generous and caring animal-protectors like you. By
          following our campaign and sharing our videos and updates with your
          friends and networks, you can amplify your impact and save more
          animals! <br />
          Use the social buttons above to celebrate your contribution to this
          mission and share information about our urgent and live-saving mission
          in Ukraine.
        </Typography>
      </Box>
    </Box>
  );
};

export default DonateSection;
