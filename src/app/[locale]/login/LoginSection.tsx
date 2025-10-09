"use client";

import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
//import { setCookie } from "nookies"; // Import nookies for setting cookies
import { useState } from "react";
import Lock from '@mui/icons-material/Lock';
import Mail from '@mui/icons-material/Mail';
import ThemeComponent from "@/components/themes";

const LoginSection = () => {
  const classes = useStyles();
  return (
    <ThemeComponent>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Grid
            container
            direction="row"
            justifyContent={"center"}

            alignItems="center"
          >
            <Grid  >
              {/* <img src={Logo} maxWidth="300" alt="Logo" className={classes.avatar} /> */}
            </Grid>
          </Grid>

          <Typography component="div">
            <Box fontSize={30} fontWeight={600} m={-2}>
              SIGN IN
            </Box>
          </Typography>
          <Typography component="div">
            <Box fontSize={16} m={1} >
              Sign into your account
            </Box>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid  >
                <TextField
                  className={classes.inputF}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Mail color="disabled" /></InputAdornment>,
                  }}
                />
              </Grid>

              <Grid  >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
                  }}
                />
              </Grid>

              <Grid  >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>

              <Grid  >
                <Button

                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}

                >
                  Sign In
                </Button>
              </Grid>

              <Grid >
                <Link href="#" color="secondary" >
                  Forgot your password?
                </Link>
              </Grid>

              <Grid  >
                <Typography component="div">
                  <Box fontSize={20} m={3} >
                    <Link href="#" color="secondary" >
                      YOU DO NOT HAVE AN ACCOUNT?
                    </Link>
                  </Box>
                </Typography>
              </Grid>

              <Grid   >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.signup}

                >
                  SIGN UP
                </Button>
              </Grid>

            </Grid>


          </form>
        </div>
      </Container>
    </ThemeComponent>
  );
};

export default LoginSection;
const useStyles = makeStyles((theme: any) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: 'white',
    borderradius: '4px',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  },
  inputF: {

  },
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup: {
    margin: theme.spacing(-2, 0, 2),
  },
}));