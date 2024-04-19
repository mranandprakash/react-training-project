import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBookingData } from "../Store/CarSlice";

const CarCard = ({ car }) => {
  const [open, setOpen] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numPassengers, setNumPassengers] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReserve = () => {
    if (new Date(returnDate) < new Date(pickupDate)) {
      setErrorMessage("Return date cannot be before pickup date");
      return;
    }
    handleClose();
    dispatch(
      updateBookingData({
        id: car.id,
        companyName: car.companyName,
        pickupDate,
        returnDate,
        total: car.pricePerHour,
        status: new Date(returnDate) < new Date() ? "Completed" : "Confirmed",
        imageUrl: car.url,
      })
    );
    navigate("/mybooking");
  };

  return (
    <Card sx={{ width: "100%", maxWidth: "345px" }}>
      <CardMedia
        component="img"
        height="240"
        image={car.url}
        alt={car.id}
        sx={{ objectFit: "cover", width: "100%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rate: ${car.pricePerHour}/hour
        </Typography>
        <Button
        variant="contained"
        color="secondary"
        sx={{ 
          mt: 2,
          '&:hover': {
            backgroundColor: 'green', // Change this to your preferred color
          },
        }}
        onClick={handleOpen}
        >
          Reserve
          </Button>
      </CardContent>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "80%",
            maxWidth: "400px",
            padding: "2rem",
            margin: "auto",
            mt: "10%",
            bgcolor: "background.paper",
            outline: "none",
          }}
        >
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Reserve {car.companyName}
          </Typography>
          <TextField
            label="Pickup Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            sx={{ mb: 2 }}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <TextField
            label="Return Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            sx={{ mb: 2 }}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          <TextField
            label="Number of Passengers"
            type="number"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={numPassengers}
            onChange={(e) => {
              if (e.target.value > 0) {
                setNumPassengers(e.target.value);
              }
            }}
            inputProps={{ min: "1" }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReserve}
            disabled={!pickupDate || !returnDate || !numPassengers}
          >
            Reserve
          </Button>
          {errorMessage && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Modal>
    </Card>
  );
};

export default CarCard;
