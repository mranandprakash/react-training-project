import React, { useEffect, useState } from "react";
import CarCard from "../Components/CarCard";
import { Box, Grid } from "@mui/material";
import { updateCarData } from "../Store/CarSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";

const payload = [
  {
    id: 1,
    companyName: "Range Rover Velar",
    pricePerHour: 40,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
  {
    id: 2,
    companyName: "BMW X1",
    pricePerHour: 27,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140591/x1-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80",
  },
  {
    id: 3,
    companyName: "Mercedes-Benz A-Class Limousine",
    pricePerHour: 30,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/149525/a-class-limousine-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
  {
    id: 4,
    companyName: "MINI Cooper",
    pricePerHour: 35,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34560/cooper-exterior-right-front-three-quarter-2.jpeg?q=80",
  },
  {
    id: 5,
    companyName: "Land Rover Defender",
    pricePerHour: 40,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/55215/defender-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
  },
  {
    id: 6,
    companyName: "Audi A4",
    pricePerHour: 45,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
  },
  {
    id: 7,
    companyName: "Range Rover Evoque",
    pricePerHour: 50,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/37721/range-rover-evoque-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
  },
  {
    id: 8,
    companyName: "Toyota Fortuner",
    pricePerHour: 55,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
  },
  {
    id: 9,
    companyName: "Toyota Camry",
    pricePerHour: 60,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
  },
  {
    id: 10,
    companyName: "Skoda Superb",
    pricePerHour: 65,
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/158937/superb-exterior-right-front-three-quarter-6.png?isig=0&q=80",
  },
];

const Home = () => {
  const { carData } = useSelector((state) => state.cars);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // to mimic API call
    setLoading(true);
    setTimeout(() => {
      dispatch(updateCarData(payload));
      setLoading(false);
    }, 1500);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div style={{ margin: "2rem auto" }}>
          <Grid container spacing={3} justifyContent="center">
            {carData.map((car) => (
              <Grid item xs={12} sm={6} md={4} key={car.id}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <CarCard car={car} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Home;
