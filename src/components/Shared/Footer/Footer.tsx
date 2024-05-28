import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/about-us">
            ABOUT US
          </Typography>
          <Typography color="#fff">OUR FAMILY</Typography>
          <Typography color="#fff">PARTNERS</Typography>
          <Typography color="#fff">RESOURCES</Typography>
          <Typography color="#fff">ADOPT OR GET INVOLVED</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          {/* <FacebookOutlinedIcon  /> */}
          <Image src={assets.logo.facebook} width={30} height={30} alt="facebook" />
          <Image src={assets.logo.instagram} width={30} height={30} alt="facebook" />
          <Image src={assets.logo.twitter} width={30} height={30} alt="facebook" />
          <Image src={assets.logo.linkedin} width={30} height={30} alt="facebook" />
        </Stack>
        
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
          Use of this service, website, or application constitutes acceptance of all terms listed above. Pet finder and its associated logos are trademarks of Pet Animal Supplies, Inc.™ 2024, Pet finder | Pet Animal Supplies, Inc. All rights reserved.
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy  | Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
