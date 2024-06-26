"use client";

import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { isLoggedIn } from "@/services/auth.services";
import { Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
  const loginUser = isLoggedIn();
  // console.log(loginUser);

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
          color="primary.main"
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
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
          {loginUser && (
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
