"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

const AddPetPage = () => {
    const handleSubmit = (values: FieldValues) =>{
        console.log(values);
        
    }
    return (
        <Box sx={{textAlign: "center"}}>
        <Typography variant="h6" color="primary" mt={3}>
          Apply Pet
        </Typography>
        <Box>
          <Typography variant="body2" color="secondary">
            Please note you will not be able to submit your application until all
            fields marked as REQUIRED have been entered.
          </Typography>
        </Box>
        <PetFrom
          onSubmit={handleSubmit}
          //   resolver={zodResolver(validationSchema)}
          // defaultValues={{
          //   email: "",
          //   password: "",
          // }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} sm={6}>
              <PetInput name="name" label="Pet Name" type="text" fullWidth={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="image"
                label="Image Url"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="species"
                label="Species"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="breed"
                label="Breed"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="color"
                label="color"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="age"
                label="Age"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="gender"
                label="Gender"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="size"
                label="size"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="location"
                label="Location"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="temperament"
                label="Temperament"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PetInput
                name="healthStatus"
                label="Health Status"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12}>
              <PetInput
                name="description"
                label="Description"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12}>
              <PetInput
                name="medicalHistory"
                label="Medical History"
                type="text"
                fullWidth={true}
              />
            </Grid>
            <Grid item sm={12}>
              <PetInput
                name="adoptionRequirements"
                label="Adoption Requirements"
                type="text"
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
      </Box>
    );
};

export default AddPetPage;