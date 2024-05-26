"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { Box, Button, Grid, Typography } from "@mui/material";

const AddAdoptionPage = () => {
  const handleSubmit = () => {};

  return (
    <Box sx={{textAlign: "center"}}>
      <Typography variant="h6" color="primary" mt={3}>
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
        //   resolver={zodResolver(validationSchema)}
        // defaultValues={{
        //   email: "",
        //   password: "",
        // }}
      >
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} sm={6}>
            <PetInput name="name" label="Name" type="text" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="email"
              label="Email"
              type="email"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="address"
              label="Address"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="contractNo"
              label="Contract No"
              type="tel"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="petsNeutered"
              label="Are other pets neutered?"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="secureOutdoorArea"
              label="Do you have a secure outdoor area?"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="animalSleep"
              label="Where will the animal sleep at night?"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PetInput
              name="animalAlonePeriodsTime"
              label="Will the animal be left alone for long periods of time?"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item sm={12}>
            <PetInput
              name="petOwnershipExperience"
              label="Do you have any pet ownership experience?"
              type="text"
              fullWidth={true}
            />
          </Grid>
          <Grid item sm={12}>
            <PetInput
              name="detailsSupport"
              label="Any other details to support your application?"
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
          Adoption Request
        </Button>
      </PetFrom>
    </Box>
  );
};

export default AddAdoptionPage;
