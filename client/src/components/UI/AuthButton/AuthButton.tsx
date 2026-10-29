"use client";

import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { isLoggedIn } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const loginUser = isLoggedIn();

  return (
    <>
      {loginUser ? (
        <AccountMenu />
      ) : (
        <Button sx={{ boxShadow: "none" }} component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
