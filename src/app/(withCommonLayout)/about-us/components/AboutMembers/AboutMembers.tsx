import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type IAboutMembers = {
  image: string;
  name: string;
  designation: string;
};

const AboutMembers = ({ data }: { data: IAboutMembers[] }) => {
  return (
    <Container sx={{
        my: 16
    }}>
      <Box textAlign="center">
        <Typography>Meet the leaders of our pack</Typography>
      </Box>

      <Box>
        <Grid container spacing={2}>
          {data?.map((member: IAboutMembers, index: number) => (
            <Grid item key={index} md={4}>
              <Box>
                <Image
                  src={member.image}
                  alt="member"
                  width={500}
                  height={100}
                />
              </Box>

              <Typography gutterBottom variant="h5" component="div">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.designation}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutMembers;
