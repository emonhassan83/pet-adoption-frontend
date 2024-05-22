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

const LoginPage = () => {
  const handleLogin = async (values: FieldValues) => {
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
            <Box>Welcome</Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login to your account
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

          <Box>
            {/* <PetFrom
              onSubmit={handleLogin}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <PetInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PetInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </PetFrom> */}
            <Grid container spacing={2} my={2}>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  size="small"
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
              Login
            </Button>
            {/* <Typography variant="body2">Forgot password?</Typography> */}
            <Typography variant="body2" sx={{my: 1.2}}> ---------- or log in with --------- </Typography>

            <Typography variant="body2" component="p" fontWeight={300}>
            Need an account?{" "}
              <Link href="/register">
                <Box component="span" textTransform="uppercase">
                  sign up
                </Box>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
