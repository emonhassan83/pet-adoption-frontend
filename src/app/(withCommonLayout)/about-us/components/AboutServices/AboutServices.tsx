import { Box,Typography } from "@mui/material";
import Image from "next/image";

type IAboutServices = {
  image: string;
  title: string;
  sub_title: string;
  description: string;
};

const AboutServices = ({ data }: { data: IAboutServices[] }) => {
  return (
    <Box sx={{
        my: 10
    }}>
      <Box textAlign="center">
        <Typography>Results that get tails wagging</Typography>
        <Typography>Our lifesaving impact is nationwide</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          backgroundColor: "rgba(245, 245, 245,1)",
          padding: "15px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            //   gutterBottom
            variant="body2"
            component="p"
          >
            {data[0].sub_title}
          </Typography>
          <Typography
            //   gutterBottom
            variant="h5"
            component="h1"
            fontWeight={600}
          >
            {data[0].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[0].description}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <Image
            src={data[0].image}
            width={500}
            height={500}
            alt="Blog Image"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          backgroundColor: "rgba(245, 245, 245,1)",
          padding: "15px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "10px",
            width: "50%",
          }}
        >
          <Image
            src={data[1].image}
            width={500}
            height={500}
            alt="Blog Image"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            //   gutterBottom
            variant="body2"
            component="p"
          >
            {data[1].sub_title}
          </Typography>
          <Typography
            //   gutterBottom
            variant="h5"
            component="h1"
            fontWeight={600}
          >
            {data[1].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data[1].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutServices;
