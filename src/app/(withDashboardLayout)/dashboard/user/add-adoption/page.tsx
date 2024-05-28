"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

const booleanOptions = ["true", "false"];
const AnimalSleepOptions = ["Outdoor", "Indoor", "Room", "Garage", "Crate"];

const AddAdoptionPage = () => {
  const{data: profile, isLoading} = useGetMyProfileQuery({});
  // console.log(profile);

  const defaultValues = {
    name: profile?.name,
    email: profile?.email,
    address: profile?.address,
    contractNo: profile?.contactNumber
  }
  
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
    
  };

  return (
    <Container sx={{textAlign: "center"}}>
      <Typography variant="h6" textTransform="uppercase" fontWeight={500} color="primary" my={2}>
        Apply to Adopt
      </Typography>
      <Box>
        <Typography variant="body2" color="secondary">
          Please note you will not be able to submit your application until all
          fields marked as REQUIRED have been entered.
        </Typography>
      </Box>
      <PetFrom
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      >
        <Grid container spacing={2} my={1}>
          <Grid item sm={12} md={6}>
            <PetInput name="name" label="Name" type="text" fullWidth={true} />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetInput
              name="email"
              label="Email"
              type="email"
              fullWidth={true}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetInput
              name="address"
              label="Address"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetInput
              name="contractNo"
              label="Contract No"
              type="tel"
              fullWidth={true}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetSelectField
              name="petsNeutered"
              label="Are other pets neutered?"
              items={booleanOptions}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetSelectField
              name="secureOutdoorArea"
              label="Do you have a secure outdoor area?"
              items={booleanOptions}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetSelectField
              name="animalSleep"
              label="Where will the animal sleep at night?"
              items={AnimalSleepOptions}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PetSelectField
              name="animalAlonePeriodsTime"
              label="Will the animal be left alone for long periods of time?"
              items={booleanOptions}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="petOwnershipExperience"
              label="Do you have any pet ownership experience?"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="detailsSupport"
              label="Any other details to support your application?"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth={true}
          sx={{
            margin: "10px 0",
          }}
          type="submit"
        >
          Adoption Request
        </Button>
      </PetFrom>
    </Container>
  );
};

export default AddAdoptionPage;
