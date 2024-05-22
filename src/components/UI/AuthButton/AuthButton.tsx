"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const handleLogOut = () => {};
  return (
    <>
      {false ? (
        <Button onClick={handleLogOut}>Logout</Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
