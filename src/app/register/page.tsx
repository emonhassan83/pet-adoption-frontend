"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { userLogin } from "@/services/actions/loginUsers";
import { registerUsers } from "@/services/actions/registeUsers";
import { storeUserInfo } from "@/services/auth.services";
import { IRegisterUser } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  confirmPass: z.string().min(6, "Must be at least 6 characters"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPass: "",
  contactNumber: "",
  address: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const { password, confirmPass, name, email, contactNumber, address } =
      values;

    const userData: IRegisterUser = {
      name,
      email,
      password,
      contactNumber,
      address,
    };

    if (password !== confirmPass) {
      toast.error("Password and Confirm Passwords do not match!");
      return;
    }

    if (password === confirmPass) {
      try {
        const res = await registerUsers(userData);
        if (res?.data?.id) {
          toast.success(res?.message);

          const result = await userLogin({
            email,
            password,
          });
          if (result?.data?.token) {
            storeUserInfo({ accessToken: result?.data?.token });
            router.push("/dashboard");
          }
        }
      } catch (error: any) {
        toast.error(error.message);
        console.error(error.message);
      }
    }
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          bgcolor: "white",
          mx: "auto",
        }}
      >
        {/* Side Image */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flex: 1,
            position: "relative",
          }}
        >
          <Image
            src="https://i.ibb.co.com/vxYcdwB/petfinder-auth.png"
            alt="Register Side Image"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "8px" }}
          />
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            flex: 1,
            // mx: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "start" },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <Box px={4}>
            <Typography variant="h6" fontWeight={500} mb={0.5}>
              Create Your Account
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "14px",
                color: "gray",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Sign up to get started with your new account
            </Typography>
          </Box>

          <PetFrom
            onSubmit={handleRegister}
            resolver={zodResolver(userValidationSchema)}
            defaultValues={defaultValues}
          >
            <Box px={4}>
              <Grid container spacing={2} my={2}>
                <Grid item xs={12}>
                  <PetInput
                    name="name"
                    label="Username"
                    type="text"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PetInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PetInput
                    name="contactNumber"
                    label="Contact No"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PetInput name="password" label="Password" fullWidth={true} />
                </Grid>
                <Grid item xs={6}>
                  <PetInput
                    name="confirmPass"
                    label="Confirm Password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <PetInput
                    name="address"
                    label="Address"
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
                Sign up
              </Button>
              <Typography
                variant="body2"
                textAlign="center"
                mt={3}
                component="p"
                fontWeight={300}
              >
                Do you already have an account?{" "}
                <Link href="/login">
                  <Box
                    fontWeight="bold"
                    component="span"
                    sx={{ textDecoration: "underline" }}
                  >
                    Login
                  </Box>
                </Link>
              </Typography>
              <p className="text-sm mt-2 text-center text-gray-600">
                © {new Date().getFullYear()} Petfinder. Crafted with ❤️ by
                Petfinder Team
              </p>
            </Box>
          </PetFrom>
        </Box>
      </Box>
    </Stack>
  );
};

export default RegisterPage;
