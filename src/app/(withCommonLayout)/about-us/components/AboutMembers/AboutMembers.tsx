import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

type IAboutMembers = {
  image: string;
  name: string;
  designation: string;
};

const AboutMembers = ({ data }: { data: IAboutMembers[] }) => {
  return (
    <Container sx={{ my: 16 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" component="h2" fontWeight={700}>
          Meet the leaders of our pack
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {data?.map((member: IAboutMembers, index: number) => (
          <Grid item key={index} xs={6} md={3}>
            <Box  sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                '&:hover img': {
                  transform: "scale(1.1)",
                },
                cursor: "pointer",
                borderRadius: 2,
                mb: 2
              }}>
              <Image
                src={member.image}
                alt="member"
                width={300}
                height={300}
                style={{
                  transition: "transform 0.5s ease",
                  width: "100%",
                  height: "auto"
                }}
              />
            </Box>

            <Typography variant="h5" component="div" align="center" gutterBottom>
              {member.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {member.designation}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutMembers;
