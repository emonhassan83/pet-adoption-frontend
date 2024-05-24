"use client";

import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
  };
  
  return (
    <>
      {userInfo?.email ? (
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
