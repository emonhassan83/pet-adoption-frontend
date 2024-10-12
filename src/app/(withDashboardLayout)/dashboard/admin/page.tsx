"use client";

import assets from "@/assets";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Button, Chip, Stack, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import UsersTableSection from "./components/UserTableData";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import MetaDataSection from "./components/MetaData";
import ProfileSection from "./components/ProfileSection";

const AdminPage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const { data: metaData } = useGetMetaDtaQuery({});

  if (isLoading || !metaData) return <Typography>Loading...</Typography>;

  return (
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

      <Box sx={{ flex: 1, mt: 4 }}>
        {/* Bar Chart */}
        <Paper elevation={2} sx={{ p: 2, borderRadius: "8px", mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Monthly Counts
          </Typography>
          <Box sx={{ height: 300 }}>
            <BarChart data={metaData?.barChartData} />
          </Box>
        </Paper>

        {/* Pie Chart */}
        <Paper elevation={2} sx={{ p: 2, borderRadius: "8px" }}>
          <Typography variant="h6" gutterBottom>
            Status Distribution
          </Typography>
          <Box sx={{ height: 300 }}>
            <PieChart data={metaData?.pieCharData} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AdminPage;
