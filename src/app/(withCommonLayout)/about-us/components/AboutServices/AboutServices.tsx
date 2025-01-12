import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type IAboutServices = {
  image: string;
  title: string;
  sub_title: string;
  description: string;
  stats: string;
  additional_info: string;
  learn_more_link: string;
};

const AboutServices = ({ data }: { data: IAboutServices[] }) => {
  return (
    <Container sx={{ my: { xs: 4, sm: 8, md: 12 } }}>
      <Box textAlign="center" sx={{ mb: { xs: 1, sm: 3 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
          }}
          fontWeight={700}
        >
          Results That Get Tails Wagging
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontSize: { xs: 10, sm: 14, md: 18 },
          }}
          color="textSecondary"
        >
          Our lifesaving impact is nationwide
        </Typography>
      </Box>

      {data.map((item, index) => (
        <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: index % 2 === 0 ? "row" : "row-reverse",
          },
          gap: { xs: 3, md: 8 },
          backgroundColor: "#f0f4f8",
          padding: { xs: "10px", sm: "15px" },
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.08)",
          mb: { xs: 2, sm: 5 }
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            width: { xs: "100%", md: "45%" },
            maxHeight: { xs: "250px", md: "450px" },
            "&:hover img": {
              transform: "scale(1.05)",
            },
            cursor: "pointer",
          }}
        >
          <Image
            src={item.image}
            layout="responsive"
            width={400}
            height={300}
            alt={item.title}
            style={{
              transition: "transform 0.9s ease",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            textAlign: { xs: "center", md: "left" },
            maxHeight: "300px",
            overflow: "hidden",
          }}
        >
          <Typography variant="body2" component="p" sx={{ fontSize: { xs: 12, sm: 14 }, mb: {xs: 0.5, sm: 1} }} gutterBottom>
            {item.sub_title}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            }}
            fontWeight={600}
            gutterBottom
          >
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, sm: 14 }, mb: {xs: 0.5, sm: 1} }} gutterBottom>
            {item.description}
          </Typography>
          <Typography variant="body1" fontWeight={600} sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            }} gutterBottom>
            {item.stats}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 12, sm: 14 }}} gutterBottom>
            {item.additional_info}
          </Typography>
          <Link href={item.learn_more_link} passHref>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                    borderRadius: 20,
                    fontSize: {
                      xs: "0.675rem",
                      sm: "0.875rem",
                      md: "1rem",
                    },
                    padding: "6px 12px"
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
      
      ))}
    </Container>
  );
};

export default AboutServices;
