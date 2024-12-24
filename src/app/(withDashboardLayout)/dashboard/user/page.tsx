"use client";

import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import { useGetAllUsersQuery, useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box } from "@mui/material";
import ProfileSection from "../admin/components/ProfileSection";
import UsersTableSection from "../admin/components/UserTableData";

const UserDashboard = () => {
  const { data: metaData, isLoading: isMetaLoading } = useGetMetaDtaQuery({});
  const { data, isLoading: isProfileLoading } = useGetMyProfileQuery({});
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery({});

  if (isMetaLoading || isProfileLoading) return <LoadingPage />;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* Profile Section */}
          <ProfileSection data={data} />

          {/* User table */}
          <UsersTableSection data={users} />
        </Box>

      </Box>
    </>
  );
};

export default UserDashboard;
