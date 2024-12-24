"use client";

import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box } from "@mui/material";
import ProfileSection from "../admin/components/ProfileSection";
import UserMetaDataSection from "./components/MetaDataSection";
import { useGetAllPetsQuery } from "@/redux/api/petApi";

const UserDashboard = () => {
  const { data: metaData, isLoading: isMetaLoading } = useGetMetaDtaQuery({});
  const { data, isLoading: isProfileLoading } = useGetMyProfileQuery({});
  const { data: pets, isLoading: isUsersLoading } = useGetAllPetsQuery({});

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
        </Box>
        <UserMetaDataSection  metaData={metaData}/>
      </Box>
    </>
  );
};

export default UserDashboard;
