"use client";

import assets from "@/assets";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Button, Chip, Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import UsersTableSection from "./components/UserTableData";

const AdminPage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});

  return (
    <>
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "start" },
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <Box>
          <Image
            height={250}
            width={220}
            src={data?.profilePhoto || assets.images.placeholder_img}
            alt="User Photo"
          />
        </Box>

        <Box>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip label={data?.role} color="primary" />
          </Stack>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {data?.name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {data?.email}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Address: {data?.address}
          </Typography>
          <Button href="/dashboard/profile" size="small" variant="outlined" color="primary">
            View Full Profile
          </Button>
        </Box>
      </Box>

      {/* User table */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" }
        }}
      >
        <UsersTableSection />
      </Box>
    </Box>

    <Box>
      
    </Box>
    </>
  );
};

export default AdminPage;
