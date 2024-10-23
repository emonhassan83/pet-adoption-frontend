import { Box, Container, Stack, Typography, Grid, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" py={6} color="white">
      <Container>
        {/* Footer Navigation */}
        <Grid container spacing={4} justifyContent="center">
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
          <Image
              src={assets.images.logo}
              alt="PetPlace Logo"
              width={100}
              height={100}
              style={{ filter: "brightness(0) invert(1)" }} 
            />
            <Typography sx={{color: "white"}} variant="body2" mt={2}>
              PetPlace is dedicated to helping pets find loving homes. We connect adopters with shelters
              and provide resources for pet care and adoption support.
            </Typography>
          </Grid>

          {/* About Us Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              About Us
            </Typography>
            <Stack spacing={1}>
              <Typography component={Link} href="/about-us" color="inherit">
                Our Story
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Our Mission
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Meet the Team
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Contact Us
              </Typography>
            </Stack>
          </Grid>

          {/* Resources Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Typography component={Link} href="/blogs" color="inherit">
                Blog
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Pet Care Guides
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                FAQs
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Support
              </Typography>
            </Stack>
          </Grid>

          {/* Get Involved Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Get Involved
            </Typography>
            <Stack spacing={1}>
              <Typography component={Link} href="/pets" color="inherit">
                Adopt a Pet
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Volunteer
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Donate
              </Typography>
              <Typography component={Link} href="/" color="inherit">
                Events
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ borderColor: "rgb(226, 226, 226)", my: 4 }} />

        {/* Terms, Conditions and Social Media Icons */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ textAlign: { xs: "center", md: "center" } }}
        >
          <Typography color="#ffffff" variant="body2" textAlign="center">
            PetPlace and its associated logos are trademarks of Pet Animal Supplies, Inc.™ 2024. All rights reserved.
          </Typography>
          <Typography color="#ffffff" variant="body2" textAlign="center">
            <Link href="/" passHref>
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/" passHref>
              Terms & Conditions
            </Link>
          </Typography>
        </Stack>

        {/* Social Media Icons (Centered) */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
          <Link href="https://www.facebook.com" passHref>
            <Image
              src={assets.logo.facebook}
              width={30}
              height={30}
              alt="Facebook"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="https://www.instagram.com" passHref>
            <Image
              src={assets.logo.instagram}
              width={30}
              height={30}
              alt="Instagram"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="https://www.twitter.com" passHref>
            <Image
              src={assets.logo.twitter}
              width={30}
              height={30}
              alt="Twitter"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link href="https://www.linkedin.com" passHref>
            <Image
              src={assets.logo.linkedin}
              width={30}
              height={30}
              alt="LinkedIn"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
