import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const BlogBannerCard = ({ blog }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: { xs: 2, sm: 4 },
        maxHeight: { xs: "auto", sm: "400px" },
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8f9fa"
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", sm: "50%" },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Image
          src={blog.image}
          alt="Blog Image"
          width={600}
          height={300}
          style={{
            objectFit: "cover",
            borderRadius: 10,
            transition: "transform 0.9s ease",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            ✏️ {blog?.author?.name}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            📅{" "}
            {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </Box>

        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
        >
          {blog?.title}
        </Typography>

        <Typography
          variant="body2"
          color="secondary"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {blog?.description}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
          sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
        >
          Category: {blog?.category || "General"}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: {xs: 1, md: 3}, fontSize: { xs: "0.8rem", sm: "1rem" }, mb: {xs: 2, md: 0} }}
        >
          Read Article
        </Button>
      </Box>
    </Box>
  );
};

export default BlogBannerCard;
