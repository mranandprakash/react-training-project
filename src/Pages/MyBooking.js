import React, { useEffect, useState } from "react";
import EachBooking from "../Components/EachBooking";
import { Grid, Tabs, Tab, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const MyBooking = () => {
  const [value, setValue] = useState("All");
  const { bookingData } = useSelector((state) => state.cars);
  const [filteredPayload, setFilteredPayload] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === "All") {
      setFilteredPayload(bookingData);
    } else {
      let filteredData = bookingData.filter((item) => item.status === value);
      setFilteredPayload(filteredData);
    }
  }, [value, bookingData]);

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        align="center"
        color="primary"
        marginTop="2rem"
      >
        My Bookings
      </Typography>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="All" value="All" />
        <Tab label="Confirmed" value="Confirmed" />
        <Tab label="Completed" value="Completed" />
        <Tab label="Cancelled" value="Cancelled" />
      </Tabs>
      <Grid container spacing={3}>
        {filteredPayload.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <EachBooking booking={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyBooking;
