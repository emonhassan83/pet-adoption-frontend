import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const OurSolutionSection = async() => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog?limit=3`
    );
    const { data: blogs } = await res.json();
    // console.log(blogs);
    

  return (
    <Container sx={{ my: 16 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Solution
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          Unleashing the power of Love, together.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogs.map((blog: any) => (
          <Grid item key={blog._id} xs={12} md={4}>
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                '&:hover img': {
                  transform: "scale(1.1)",
                },
                cursor: "pointer"
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                style={{
                  transition: "transform 0.5s ease",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </Box>

            <Box sx={{ mt: 2, px: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {blog.category}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurSolutionSection;
