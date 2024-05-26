"use client";

import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UserInformation from "./components/UserInfromation";
import ChangePasswordSection from "./components/ChangePassword";
import PetAdoptSection from "./components/PetAdoptSection";

const ProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  console.log(data);

  const fileUploadHandler = () => {};

  return (
    <Container sx={{ mt: 4, ml: 2 }}>
      <Grid container spacing={4}>
        <Grid xs={12} md={5}>
          <Box
            sx={{
              height: 420,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              height={420}
              width={450}
              src={data?.profilePhoto}
              alt="User Photo"
            />
          </Box>
          <Box my={3}>
            {false ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              endIcon={<ModeEditIcon />}
              sx={{width: "450px"}}
              
              //   onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <UserInformation data={data} />
          <ChangePasswordSection/>
        </Grid>
      </Grid>

      <PetAdoptSection data={data} />
    </Container>
  );
};

export default ProfilePage;
