"use client";

import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const router = useRouter();
  const userInfo = getUserInfo();

  // const handleLogOut = () => {
  //   logoutUser(router);
  // };

  return (
    <>
      {data && !isLoading && userInfo?.email ? (
        <AccountMenu data={data} />
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
