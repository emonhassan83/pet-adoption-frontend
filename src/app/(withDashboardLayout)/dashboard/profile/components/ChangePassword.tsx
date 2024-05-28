import PetFrom from '@/components/Forms/PetForm';
import PetInput from '@/components/Forms/PetInput';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import LockResetIcon from '@mui/icons-material/LockReset';

const ChangePasswordSection = () => {
    const handleChangePassword =(value: FieldValues)=>{
        console.log(value);
        
    }
    return (
        <Box>
           <Typography variant='h6' color='primary.main' mt={3}>
            Change Password
         </Typography>

         <Box>
            <PetFrom
              onSubmit={handleChangePassword}
            >
              <Grid container spacing={2} mt={0.5} mb={1}>
                <Grid item sm={6}>
                  <PetInput
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={6}>
                  <PetInput
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth={true}
                sx={{
                  margin: "10px 0",
                }}
                endIcon={<LockResetIcon />}
                type="submit"
              >
                Change Password
              </Button>
            </PetFrom>
          </Box>
        </Box>
    );
};

export default ChangePasswordSection;