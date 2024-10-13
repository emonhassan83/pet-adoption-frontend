import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const LeadershipSection = () => {
  const data = [
    {
      image: assets.images.about_author1,
      name: "Susanne Kogut",
      designation: "President",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      image: assets.images.about_author3,
      name: "Daymond John",
      designation: "Vice Chair",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      image: assets.images.about_author4,
      name: "Dana Puglish",
      designation: "Head of Marketing",
      social_links: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "center",
        mt: 3,
      }}
    >
      {data.map((leader, index) => (
        <Link key={index} href="/about-us" passHref>
          <Card
            sx={{
              width: 180,
              height: 280,
              borderRadius: 4,
              boxShadow: 3,
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Image
              src={leader.image}
              alt={leader.name}
              width={90}
              height={100}
              style={{
                transition: "transform 0.9s ease",
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <CardContent>
              <Stack direction="column" spacing={1}>
                <Typography variant="h6" fontWeight="medium">
                  {leader.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  fontStyle="italic"
                >
                  {leader.designation}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default LeadershipSection;
