import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogged, setShowToast } from "../Store/ApplicationSlice";

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const validateFullName = (name) => {
    if (name.replace(/\s/g, "").length < 3) {
      return "Full name must be at least 3 characters long excluding spaces";
    }
    return "";
  };

  const validateMobileNumber = (mobileNumber) => {
    if (!/^\d{10,}$/.test(mobileNumber)) {
      return "Please enter a valid mobile number";
    }
    return "";
  };

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

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    let error = "";
    switch (name) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "mobileNumber":
        error = validateMobileNumber(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.terms) {
      dispatch(setShowToast(true));
      return;
    }
    dispatch(setLogged(true));
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: "10%" }}>
      <Paper
        style={{
          padding: 16,
          width: "50%",
          boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.1)",
          border: "1px solid #ccc",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" MuiTypography-gutterBottom>
              Register
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "20px" }}>
            <TextField
              name="fullName"
              label="Name"
              value={formState.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              required
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={6} style={{ paddingRight: "10px" }}>
              <TextField
                name="mobileNumber"
                label="Mobile Number"
                value={formState.mobileNumber}
                onChange={handleChange}
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: "10px" }}>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={6} style={{ paddingRight: "10px" }}>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6} style={{ paddingLeft: "10px" }}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formState.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: "20px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formState.terms}
                  onChange={handleChange}
                  name="terms"
                  color="primary"
                />
              }
              label="I accept the terms and conditions"
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 16 }}>
            <Button variant="contained" color="secondary" type="submit" fullWidth>
              Register
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
