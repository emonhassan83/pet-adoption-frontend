import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          {/* <FacebookOutlinedIcon  /> */}
          <Image src={assets.logo.instagram} width={30} height={30} alt="facebook" />
          <Image src={assets.logo.twitter} width={30} height={30} alt="facebook" />
          <Image src={assets.logo.linkedin} width={30} height={30} alt="facebook" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
