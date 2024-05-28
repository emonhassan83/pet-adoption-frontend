import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <Typography variant="h1" component="h1" color="primary" sx={{ fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" color="text.secondary" sx={{ my: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
