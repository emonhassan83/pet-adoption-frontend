"use client";

import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Paper, Typography } from "@mui/material";
import ProfileSection from "../admin/components/ProfileSection";
import UserMetaDataSection from "./components/MetaDataSection";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import BarChart from "../admin/components/BarChart";
import PieChart from "../admin/components/PieChart";

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

      {/* Charts Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 4,
          gap: 4,
          justifyContent: "center",
        }}
      >
        {/* Bar Chart */}
        <Paper
          elevation={2}
          sx={{
            p: 2,
            borderRadius: "8px",
            width: { xs: "100%", md: "50%" },
            maxWidth: 600,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Monthly Adopt Counts
          </Typography>
          <Box sx={{ height: 300 }}>
            <BarChart data={metaData?.barChartData} />
          </Box>
        </Paper>

        {/* Pie Chart */}
        <Paper
          elevation={2}
          sx={{
            p: 2,
            borderRadius: "8px",
            width: { xs: "100%", md: "50%" },
            maxWidth: 600,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Adopt Status Distribution
          </Typography>
          <Box sx={{ height: 300 }}>
            <PieChart data={metaData?.pieCharData} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default UserDashboard;
