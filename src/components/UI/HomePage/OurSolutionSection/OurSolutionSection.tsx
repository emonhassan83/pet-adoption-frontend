import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FillPetButton from "../../PetButton/FillPetButton";

const OurSolutionSection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog?limit=3`
  );
  const { data: blogs } = await res.json();

  return (
    <Container sx={{ my: { xs: 4, sm: 8, md: 12 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 6 } }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight={800}
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
          }}
        >
          Our Solution
        </Typography>
        <Typography
          component="p"
          fontWeight={400}
          sx={{
            mt: { xs: 0.5, sm: 1, md: 2 },
            fontSize: { xs: 10, sm: 14, md: 18 },
          }}
        >
          Unleashing the power of Love, together.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogs.map((blog: any) => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                borderRadius: "10px",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                "&:hover::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
                cursor: "pointer",
              }}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                style={{
                  transition: "transform 0.9s ease",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>

            <Box sx={{ mt: {xs: 2, sm: 3}, px: {xs: 0.5, sm: 2} }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "0.675rem",
                    sm: "0.875rem",
                    md: "1rem",
                  },
                  mb: { xs: 0.5, md: 1},
                }}
              >
                <i className="fas fa-bookmark"></i> {blog.category}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={600}
                sx={{ fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" }, color: "#333" }}
              >
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{
                  fontSize: {
                    xs: "0.675rem",
                    sm: "0.875rem",
                    md: "1rem",
                  },
                  mb: {xs: 1, md: 2},
                }}>
                {blog.description.length > 100
                  ? `${blog.description.slice(0, 100)}...`
                  : blog.description}
              </Typography>
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
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* View all Button */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <FillPetButton href="/blogs">View all Blogs</FillPetButton>
      </Box>
    </Container>
  );
};

export default OurSolutionSection;
