"use client";

import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { isLoggedIn } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const loginUser = isLoggedIn();

  return (
    <>
      {loginUser ? (
        <AccountMenu data={data} />
      ) : (
        <Button sx={{ boxShadow: "none" }} component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
