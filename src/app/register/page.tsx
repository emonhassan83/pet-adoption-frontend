"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
const RegisterPage = () => {
  const handleRegister = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="p">Welcome</Typography>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Sign up to your account
              </Typography>
            </Box>
          </Stack>
          {/* show error massage */}
          {false && (
            <Box>
              <Typography
                sx={{
                  padding: "1px",
                  borderRadius: "3px",
                  color: "#A94064",
                  marginTop: "5px",
                  fontWeight: "700",
                }}
              >
                {"error"}!
              </Typography>
            </Box>
          )}
          {/* here start form */}
          <PetFrom
            onSubmit={handleRegister}
            defaultValues={{
              name: "",
              email: "",
              password: "",
            }}
          >
            <Box>
              <Grid container spacing={2} my={2}>
                <Grid item sm={12}>
                  <PetInput
                    name="name"
                    label="Username"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={12}>
                  <PetInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item sm={12}>
                  <PetInput
                    name="password"
                    label="Password"
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
                type="submit"
              >
                Sign up
              </Button>
              <Typography variant="body2" component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">
                  <Box component="span" textTransform="uppercase">
                    Login
                  </Box>
                </Link>
              </Typography>
            </Box>
          </PetFrom>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
