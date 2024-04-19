import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateSingleBooking } from "../Store/CarSlice";

const EachBooking = ({ booking }) => {
  const { id, name, pickupDate, returnDate, total, status, imageUrl } = booking;
  const dispatch = useDispatch();
  const handleCancelRide = () => {
    // Cancel ride logic goes here
    dispatch(updateSingleBooking({ id, status: "Cancelled" }));
  };

  return (
    <Card sx={{ display: "flex", margin: "2rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={id}
            height="240"
            sx={{ width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Box marginBottom={2}>
              <Typography variant="body2" color="text.secondary">
                From: {new Date(pickupDate).toLocaleDateString()} To:{" "}
                {new Date(returnDate).toLocaleDateString()}
              </Typography>
            </Box>
            <Box marginBottom={2}>
              <Typography variant="body2" color="text.secondary">
                Total: ${total}
              </Typography>
            </Box>
            <Box marginBottom={2}>
              <Typography variant="body2" color="text.secondary">
                Status: {status}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={handleCancelRide}
              disabled={status !== "Confirmed"}
            >
              Cancel Ride
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EachBooking;
