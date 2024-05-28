"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelectField from "@/components/Forms/PetSelectField";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

const genderOptions = ["Male", "Female", "Unknown"];
const sizeOptions = ["Large", "Medium", "Small"];
const healthOptions = [
  "Healthy",
  "Unhealthy",
  "Underweight",
  "Overweight",
  "Injured",
  "Under Treatment",
  "Recovered",
  "Pregnant",
];

const colorOptions = [
  "Black",
  "White",
  "Brown",
  "Gray",
  "Golden",
  "Cream",
  "Blue",
  "Orange",
  "Yellow",
  "Silver",
  "Other",
];

const AddPetPage = () => {
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography
        variant="h5"
        color="primary"
        textTransform="uppercase"
        mt={2}
        mb={1}
      >
        Add Pet
      </Typography>
      <Box>
        <Typography variant="body2" color="secondary">
          Please note you will not be able to submit your application until all
          fields marked as REQUIRED have been entered.
        </Typography>
      </Box>
      <PetFrom onSubmit={handleSubmit}>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} md={6}>
            <PetInput
              name="name"
              label="Pet Name"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetInput
              name="image"
              label="Image Url"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="species"
              label="Species"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="breed" label="Breed" type="text" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="color"
              label="color"
              items={colorOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="age" label="Age" type="text" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="gender"
              label="Gender"
              items={genderOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="size"
              label="size"
              items={sizeOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="location"
              label="Location"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput
              name="temperament"
              label="Temperament"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelectField
              name="healthStatus"
              label="Health Status"
              items={healthOptions}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="description"
              label="Description"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="medicalHistory"
              label="Medical History"
              type="text"
              multiline
              rows={3}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <PetInput
              name="adoptionRequirements"
              label="Adoption Requirements"
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
          Add Pet
        </Button>
      </PetFrom>
    </Container>
  );
};

export default AddPetPage;
