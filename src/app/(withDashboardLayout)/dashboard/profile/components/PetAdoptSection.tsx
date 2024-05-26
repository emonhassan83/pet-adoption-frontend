import { Box, Typography } from "@mui/material";
import PetCard from "./PetCard";
import { useGetMyAdoptionRequestsQuery } from "@/redux/api/adoptionApi";

const PetAdoptSection = ({ data }: any) => {
  const { data: adoptionRequests, isLoading } = useGetMyAdoptionRequestsQuery(
    []
  );
  // console.log(adoptionRequests);

  return (
    <Box
      sx={{
        mt: 8,
      }}
    >
      <Typography
        variant="h6"
        align="center"
        color="primary.main"
        textTransform="uppercase"
        mb={2}
      >
        My Adopted Pets
      </Typography>
      {adoptionRequests.map((adoptionRequest: any) => (
        <PetCard key={data.id} adoptionRequest={adoptionRequest} />
      ))}
    </Box>
  );
};

export default PetAdoptSection;
