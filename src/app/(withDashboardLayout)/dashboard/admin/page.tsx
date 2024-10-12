"use client";

import assets from "@/assets";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AdminPage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div>
          <Image
            height={250}
            width={220}
            src={data?.profilePhoto || assets.images.placeholder_img}
            alt="User Photo"
          />
        </div>

        <div>
          <Stack direction="row" spacing={1}>
            <Chip label={data?.role} color="primary" />
          </Stack>
          <Typography>{data?.name}</Typography>
          <Typography>{data?.email}</Typography>
          <Typography>Address: {data?.address}</Typography>
          <Button href="/dashboard/profile">View Full Profile</Button>
        </div>
      </div>

        <div>
          
        </div>
    </>
  );
};

export default AdminPage;
