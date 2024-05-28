import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

type IAboutServices = {
  image: string;
  title: string;
  sub_title: string;
  description: string;
};

const AboutServices = ({ data }: { data: IAboutServices[] }) => {
  return (
    <Container sx={{ my: 10 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2" fontWeight={700}>
          Results that get tails wagging
        </Typography>
        <Typography variant="subtitle1" component="p" color="textSecondary">
          Our lifesaving impact is nationwide
        </Typography>
      </Box>
      
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
            gap: 10,
            backgroundColor: "#faf5ff",
            padding: "15px",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              width: { xs: "100%", md: "50%" },
              // width: "100%",
              '&:hover img': {
                transform: "scale(1.1)",
              },
              cursor: "pointer"
            }}
          >
            <Image
             src={item.image}
             layout="responsive"
             width={400}
             height={400}
             alt={item.title}
             style={{
              transition: "transform 0.5s ease",
              maxWidth: "100%",
              height: "auto"
            }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography sx={{
              textTransform: "uppercase",
            }} variant="body2" component="p" gutterBottom>
              {item.sub_title}
            </Typography>
            <Typography  sx={{
              textTransform: "uppercase",
            }} variant="h5" component="h3" fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default AboutServices;
