import { createSlice } from "@reduxjs/toolkit";

const CarSlice = createSlice({
  name: "carslice",
  initialState: {
    carData: [],
    bookingData: [],
  },
  reducers: {
    updateCarData: (state, action) => {
      state.carData = [...action.payload];
    },
    updateBookingData: (state, action) => {
      state.bookingData.push(action.payload);
    },
    updateSingleBooking: (state, action) => {
      state.bookingData = state.bookingData.map((item) => {
        if (item.id === action.payload.id) {
          item.status = action.payload.status;
        }
        return item;
      });
    },
  },
});

export const { updateCarData, updateBookingData, updateSingleBooking } =
  CarSlice.actions;
export default CarSlice.reducer;
