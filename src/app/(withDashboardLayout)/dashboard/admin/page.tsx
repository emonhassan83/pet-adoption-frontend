"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Typography, Box, Paper } from "@mui/material";
import UsersTableSection from "./components/UserTableData";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import MetaDataSection from "./components/MetaData";
import ProfileSection from "./components/ProfileSection";
import FeatureBlogs from "./components/FeatureBlog";
import FeaturePets from "./components/PopularPets";

const AdminPage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const { data: metaData } = useGetMetaDtaQuery({});

  if (isLoading || !metaData) return <Typography>Loading...</Typography>;

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
          <UsersTableSection />
        </Box>

        {/* Metadata Section */}
        <MetaDataSection />
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

      {/* Feature Blog */}
      <FeatureBlogs />
      {/* Feature Pets */}
       <FeaturePets />   
    </>
  );
};

export default AdminPage;
