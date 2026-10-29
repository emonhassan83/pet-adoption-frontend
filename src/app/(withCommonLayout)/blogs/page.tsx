import { Box, Container, Grid, Typography } from "@mui/material";
import BlogBannerCard from "./components/BlogBannerCard/BlogBannerCard";
import BlogCard from "./components/BlogCard/BlogCard";
import Meta from "@/components/Meta/MetaData";

const categories = [
  "Adopting a Pet",
  "Health & Safety",
  "Symptoms",
  "Pet Behavior",
  "Pet Insurance",
  "Pet Care",
  "Pet Health",
  "others",
];

const page = async () => {
  let blogs: any[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/blog`, {
      next: { revalidate: 30 },
    });
    if (res.ok) {
      const data = await res.json();
      blogs = data?.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <>
      <Meta
        title="Blogs | Petfinder - Pet Adoption Platform & Management System"
        description="This is the Pet Adoption Platform & Management System blogs Page where all users can show all blogs all information and more."
      />

      <Container sx={{ my: 8 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Pet Article
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 2,
              overflowX: "auto",
              whiteSpace: "nowrap",
              paddingBottom: 1,
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                height: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#aaa",
              },
            }}
          >
            <Typography variant="body2" fontSize={14} fontWeight={800}>
              Popular Tags:
            </Typography>
            {categories.map((category, index) => (
              <Box
                sx={{
                  cursor: "pointer",
                  display: "inline-block",
                  marginRight: 2,
                }}
                key={index}
              >
                <Typography
                  variant="body2"
                  fontSize={14}
                  fontWeight={400}
                  sx={{
                    position: "relative",
                    "&:hover": {
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "currentColor",
                        bottom: 0,
                        left: 0,
                      },
                    },
                  }}
                >
                  {category}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          {blogs[0] && <BlogBannerCard blog={blogs[0]} />}
          {blogs?.length > 1 && (
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {blogs.slice(1).map((blog: any) => (
                <Grid item xs={12} sm={12} md={4} key={blog.id}>
                  <BlogCard blog={blog} />
                </Grid>
              ))}
            </Grid>
          )}
          {blogs?.length === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ mt: 4, textAlign: "center" }}>
              No blog articles available at the moment.
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default page;
