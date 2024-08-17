import { Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

interface NavbarProps {
  accessToken?: string;
}

const Navbar = ({ accessToken }: NavbarProps) => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h5"
          color=""
          component={Link}
          href="/"
          fontWeight={600}
        >
          Petfinder
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/pets">
            Pets
          </Typography>
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
          <Typography component={Link} href="/blogs">
            Blogs
          </Typography>
          {accessToken && (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          )}
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
