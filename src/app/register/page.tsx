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
import { useForm } from "react-hook-form";

type Inputs = {
  example: string
  exampleRequired: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

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
          <form >
          <Box>
            <Grid container spacing={2} my={2}>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
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
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
