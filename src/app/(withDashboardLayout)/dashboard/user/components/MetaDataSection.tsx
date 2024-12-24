import PetsIcon from "@mui/icons-material/Pets";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Box, Paper, Typography } from "@mui/material";

const UserMetaDataSection = ({ metaData }: any) => {
  const { petCount, adoptionCount, blogCount, totalRevenue } = metaData;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(4, 1fr)", md: "repeat(4, 1fr)" },
        gap: 2,
        mt: 4,
        flex: 1,
      }}
    >
      {[
        {
          icon: <MonetizationOnIcon fontSize="large" color="primary" />,
          count: `$${totalRevenue}`,
          label: "My Adopt Coast",
        },
        {
          icon: <PetsIcon fontSize="large" color="primary" />,
          count: petCount,
          label: "Total Pets",
        },
        {
          icon: <LocalOfferIcon fontSize="large" color="primary" />,
          count: adoptionCount,
          label: "My Adoptions",
        },
        {
          icon: <ImportContactsIcon fontSize="large" color="primary" />,
          count: blogCount,
          label: "My Blogs",
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

export default UserMetaDataSection;
