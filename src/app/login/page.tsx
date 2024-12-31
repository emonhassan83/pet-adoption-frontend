"use client";

import PetFrom from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { userLogin } from "@/services/actions/loginUsers";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import ForgetPasswordModal from "./components/ForgetPasswordModal";
import Image from "next/image";

const demoCredentials = [
  {
    role: "Admin",
    email: "alice@example.com",
    password: "user123",
  },
  {
    role: "User",
    email: "emily@example.com",
    password: "user123",
  },
];

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const [defaultValues, setDefaultValues] = useState({
    email: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async (values: FieldValues) => {
    // console.log("Form Submitted:", values);
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // router.push("/dashboard");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  const setDemoCredentials = (email: string, password: string) => {
    setDefaultValues({ email, password });
  };

  return (
    <>
    <ForgetPasswordModal open={isModalOpen} setOpen={setIsModalOpen} />
    <Container>
      <Grid container sx={{ height: "100vh" }} alignItems="center">
        {/* Left Side Image */}
        <Grid
          item
          xs={0}
          lg={6}
          sx={{
            display: { xs: "none", md: "block" },
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src="https://imagizer.imageshack.com/img923/2551/LYAyZF.png"
              alt="Login Illustration"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>

        {/* Right Side Form */}
        <Grid item xs={12} lg={6}>
          <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 500,
                width: "100%",
                borderRadius: 1,
                p: 4,
                textAlign: { xs: "center", md: "start" }
              }}
            >
              <Stack
                sx={{
                  justifyContent: { xs: "center", md: "start" },
                  alignItems: { xs: "center", md: "start" }
                }}
              >
                <Typography
                  variant="h6" fontWeight={500} mb={0.5}
                >
                  Welcome To Back!
                </Typography>
                <Typography component="p"
                  sx={{
                    fontSize: "14px",
                    color: "gray",
                    textAlign: { xs: "center", md: "start" },
                    mb: 1.5
                  }}>
                  Sign in to continue to your account
                </Typography>
              </Stack>

              <PetFrom
                onSubmit={handleLogin}
                resolver={zodResolver(validationSchema)}
                defaultValues={defaultValues}
              >
                <Grid container spacing={2} my={1}>
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
                      fullWidth={true}
                    />
                  </Grid>
                </Grid>

                <Button
                  fullWidth={true}
                  sx={{
                    margin: "15px 0",
                  }}
                  type="submit"
                  startIcon={<LoginIcon />}
                >
                  Login
                </Button>
                <Typography
                  onClick={() => setIsModalOpen(true)}
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "end",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginTop: "-10px",
                  }}
                  variant="body2"
                >
                  Forgot Password?
                </Typography>

                {demoCredentials.map(({ role, email, password }) => (
                  <div
                    className="flex justify-between items-center mt-4"
                    key={role}
                  >
                    <div>
                      <h3 className="text-start text-md text-gray-500">
                        {role}:
                      </h3>
                      <p className="text-sm text-gray-600">Email - {email}</p>
                      <p className="text-start text-sm text-gray-600">
                        Pass - {password}
                      </p>
                    </div>
                    <div>
                      <Button
                        type="button"
                        className="text-white rounded w-9 h-7 text-[10px]"
                        onClick={() => setDemoCredentials(email, password)}
                      >
                        <span className="text-[11px]">Login</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </PetFrom>
            </Box>
            <Typography textAlign="center" mt={3} variant="body2" component="p" fontWeight={300}>
                  Need an account?{" "}
                  <Link href="/register">
                    <Box
                      fontWeight="bold"
                      component="span"
                      sx={{ textDecoration: "underline" }}
                    >
                      SignUp
                    </Box>
                  </Link>
                </Typography>
                <p className="text-sm mt-2 text-center text-gray-600">
                  © {new Date().getFullYear()} Petfinder. Crafted with ❤️ by
                  Petfinder Team
                </p>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </>
  );
};

export default LoginPage;
