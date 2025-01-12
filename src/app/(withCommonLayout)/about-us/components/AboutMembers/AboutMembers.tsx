import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

type IAboutMembers = {
  image: string;
  name: string;
  designation: string;
  bio: string;
  experience: string;
  achievements: string[];
  social_links: {
    linkedin: string;
    twitter: string;
  };
};

const AboutMembers = ({ data }: { data: IAboutMembers[] }) => {
  return (
    <Container sx={{ my: { xs: 4, sm: 8, md: 12 } }}>
      <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem" },
          }}
          fontWeight={700}
        >
          Meet the Leaders of Our Pack
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            mt: { xs: 0.5, sm: 1, md: 2 },
            fontSize: { xs: 10, sm: 14, md: 18 },
          }}
          color="textSecondary"
        >
          Our dedicated team is here to make a difference
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {data?.map((member: IAboutMembers, index: number) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
                cursor: "pointer",
                borderRadius: 2,
                mb: 2,
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                style={{
                  transition: "transform 0.9s ease",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Box>

            <Typography
              variant="h5"
              component="div"
              align="center"
              sx={{
                fontSize: { xs: "1.2rem", sm: "2rem" },
              }}
              gutterBottom
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { xs: 10, sm: 14, md: 18 },
              }}
              align="center"
            >
              {member.designation}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{
                fontSize: { xs: 10, sm: 14, md: 18 },
                mt: {xs:0, md: 1}
              }}
            >
              {member.bio}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{
                fontSize: { xs: 10, sm: 14, md: 18 },
                mt:0.5,
                fontWeight: 600
              }}
            >
              Experience: {member.experience}
            </Typography>
            <Box mt={2}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  fontSize: { xs: 10, sm: 14, md: 18 },
                  mt:0.5,
                  fontWeight: 600
                }}
                textAlign="center"
              >
                Achievements:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mt: {xs: 0, sm:1} }}>
                {member.achievements.map((achievement, i) => (
                  <Typography
                    variant="body2"
                    component="li"
                    key={i}
                    sx={{
                      fontSize: { xs: 10, sm: 14, md: 18 },
                    }}
                    color="textSecondary"
                  >
                    {achievement}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" sx={{mt: {xs:0, md: 2}}}>
              <MuiLink
                href={member.social_links.linkedin}
                target="_blank"
                rel="noopener"
                sx={{ mx: {xs: 0, md:1} }}
              >
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </MuiLink>
              <MuiLink
                href={member.social_links.twitter}
                target="_blank"
                rel="noopener"
                sx={{ mx: {xs: 0, md:1} }}
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </MuiLink>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutMembers;
