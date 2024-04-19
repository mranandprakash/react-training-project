import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogged, setShowToast } from "../Store/ApplicationSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const validateEmail = (email) => {
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+(com|in|info)$/.test(email)) {
      return 'Email must contain "@" and support domains .com, .in, .info';
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:])([^\s]){8,}$/.test(password)) {
      return "Password must be 8 characters long with at least one uppercase, one special character, and one numeric value";
    }
    return "";
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(value),
    }));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: validatePassword(value),
    }));
  };

  const handleTermsChecked = (event) => {
    setTermsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!termsChecked) {
      dispatch(setShowToast(true));
      return;
    }
    if(email === 'anand@anand.com' && password === 'Test@123') {
      dispatch(setLogged(true));
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 2,
              border: "1px solid #ccc",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
              borderRadius: "4px",
              backgroundColor: "#ffff",
            }}
          >
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              fullWidth
              sx={{ mb: 2 }}
              error={!!errors.password}
              helperText={errors.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={termsChecked}
                  onChange={handleTermsChecked}
                />
              }
              label="I accept the Privacy Statement"
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="secondary" fullWidth>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
