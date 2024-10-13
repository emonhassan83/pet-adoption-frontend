import PetsIcon from "@mui/icons-material/Pets";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import { Box, Paper, Typography } from "@mui/material";
import { useGetMetaDtaQuery } from "@/redux/api/metaApi";

const MetaDataSection = () => {
    const { data: metaData, isLoading } = useGetMetaDtaQuery({});

    if (isLoading) return <Typography>Loading...</Typography>;
  
    const {
      userCount,
      adminCount,
      petCount,
      popularPetCount,
      adoptionCount,
      blogCount,
      donationCount,
      totalRevenue,
    } = metaData;

    return (
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(4, 1fr)", md: "repeat(2, 1fr)" }, // Responsive grid
          gap: 2,
          mt: 4,
          flex: 1,
        }}
      >
        {[
          {
            icon: <PetsIcon fontSize="large" color="primary" />,
            count: petCount,
            label: "Total Pets",
          },
          {
            icon: <GroupIcon fontSize="large" color="primary" />,
            count: userCount,
            label: "Total Users",
          },
          {
            icon: <VerifiedUserIcon fontSize="large" color="primary" />,
            count: adminCount,
            label: "Total Admins",
          },
          {
            icon: <MonetizationOnIcon fontSize="large" color="primary" />,
            count: `$${totalRevenue}`,
            label: "Total Revenue",
          },
          {
            icon: <ImportContactsIcon fontSize="large" color="primary" />,
            count: blogCount,
            label: "Total Blogs",
          },
          {
            icon: <LocalOfferIcon fontSize="large" color="primary" />,
            count: adoptionCount,
            label: "Total Adoptions",
          },
          {
            icon: <AttachMoneyIcon fontSize="large" color="primary" />,
            count: donationCount,
            label: "Total Donations",
          },
          {
            icon: <StarIcon fontSize="large" color="primary" />,
            count: popularPetCount,
            label: "Adoption Pets",
          },
        ].map((item, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              p: 2,
              borderRadius: "8px",
              textAlign: "center",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "scale(1.02)",
              },
            }}
          >
            {item.icon}
            <Typography variant="h6">{item.count}</Typography>
            <Typography variant="body2">{item.label}</Typography>
          </Paper>
        ))}
      </Box>
    );
};

export default MetaDataSection;