"use client";

import { useGetAllUsersQuery, useGetMyProfileQuery } from "@/redux/api/userApi";
import { Typography, Box, Paper } from "@mui/material";
import UsersTableSection from "./components/UserTableData";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import MetaDataSection from "./components/MetaData";
import ProfileSection from "./components/ProfileSection";
import FeaturePets from "./components/PopularPets";
import LeadProfile from "./components/LeadProfile";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import Meta from "@/components/Meta/MetaData";

const AdminPage = () => {
  const { data: metaData, isLoading: isMetaLoading } = useGetMetaDtaQuery({});
  const { data, isLoading: isProfileLoading } = useGetMyProfileQuery({});
  const { data: users, isLoading: isUsersLoading } = useGetAllUsersQuery({});

  if (isMetaLoading || isProfileLoading || isUsersLoading)
    return <LoadingPage />;

  return (
    <>
    <Meta
        title="Dashboard | Petfinder - Pet Adoption Platform & Management System"
        description="This is the admin dashboard of Petfinder where admin can manage their manage users, manage adoption, create blog, manage blog and more."
      />

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

        {/* Metadata Section */}
        <MetaDataSection  metaData={metaData}/>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 4,
          gap: 4,
          width: "100%",
        }}
      >
        {/* Team Leaders */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Team Leaders
          </Typography>
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
            }}
          >
            <LeadProfile />
          </Box>
        </Box>

        {/* Feature Pets */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Feature Pets
          </Typography>
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
            }}
          >
            <FeaturePets />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminPage;
