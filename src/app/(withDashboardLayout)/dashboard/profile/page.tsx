"use client";

import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { Box, Button, Container, Grid } from "@mui/material";
import Image from "next/image";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UserInformation from "./components/UserInfromation";
import ChangePasswordSection from "./components/ChangePassword";
import PetAdoptSection from "./components/PetAdoptSection";
import assets from "@/assets";
import { useState } from "react";
import ProfileUpdateModal from "./components/EditProfileModal";
import uploadImageToImgbb from "@/utils/imageUploader";
import { toast } from "sonner";
import LoadingPage from "@/components/Shared/Loader/LoadingPage";
import { useGetMyAdoptionRequestsQuery } from "@/redux/api/adoptionApi";
import Meta from "@/components/Meta/MetaData";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: isProfileLoading } = useGetMyProfileQuery({});
  const [updateMyProfile, { isLoading: updating }] =
    useUpdateMyProfileMutation();
  const { data: adoptionRequests, isLoading: isAdoptLoading } = useGetMyAdoptionRequestsQuery(
    []
  );

  if (isProfileLoading || isAdoptLoading || updating) {
    return <LoadingPage />;
  }

  const handleFileUpload = async (file: File) => {
    try {
      const image = await uploadImageToImgbb(file);

      const updatedUserData = {
        profilePhoto: image,
      };

      const upload = await updateMyProfile(updatedUserData);
      if (upload?.data) {
        toast.success("Profile photo updated successfully");
      }
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <>
      <Meta
        title="View Profile | Petfinder - Pet Adoption Platform & Management System"
        description="This is the Profile page of Petfinder where all users can Profile their account and provide access to the service."
      />

      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        data={data}
      />
      <Container sx={{ mt: 4, ml: 2 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={5}>
            <Box
              sx={{
                height: { xs: 400, sm: 420 },
                width: { xs: 400, sm: "100%" },
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                height={420}
                width={450}
                src={data?.profilePhoto || assets.images.placeholder_img}
                alt="User Photo"
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box my={3}>
              <AutoFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={handleFileUpload}
                variant="text"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button
                endIcon={<ModeEditIcon />}
                sx={{ width: { xs: "100%", md: "450px" } }}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
            </Box>
          </Grid>
          <Grid xs={12} md={7}>
            <UserInformation data={data} />
            <ChangePasswordSection />
          </Grid>
        </Grid>

        {data.role === "USER" && <PetAdoptSection adoptionRequests={adoptionRequests} />}
      </Container>
    </>
  );
};

export default ProfilePage;
