import { Box, Container, Typography } from "@mui/material";
import BlogBannerCard from "./components/BlogBannerCard/BlogBannerCard";

const categories = [
  "Adopting a Pet",
  "Health & Safety",
  "Symptoms",
  "Finding a Lost Pet",
  "Pet Insurance",
  "others",
];

const page = async() => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog`
      );
      const { data: blogs } = await res.json();
      console.log(blogs);
      
  return (
    <Container sx={{ my: 8 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Pet Article
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={800}>
            Popular Tags:
          </Typography>
          {categories.map((category, index) => (
            <Box key={index}>
              <Typography variant="body2" fontSize={14} fontWeight={400}>
                {category}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

        <BlogBannerCard blog={blogs[0]}/>
      <Box>
        {
            // fetch here other data and use here blog card
        }
      </Box>
    </Container>
  );
};

export default page;
