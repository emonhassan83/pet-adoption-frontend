import { Box, Typography } from "@mui/material";
import PetCard from "./PetCard";

const PetAdoptSection = ({data}: any) => {
    // console.log(data);
    
    return (
        <Box sx={{
            mt: 8
        }}>
            <Typography variant='h6' align="center" color='primary.main' textTransform="uppercase" mb={2}>
            My Adopted Pets
         </Typography>
            {
                data?.adoptionRequest.map((adopt: any) =>(

                    <PetCard key={data.id} adopt={adopt}/>
                ))
            }
        </Box>
    );
};

export default PetAdoptSection;