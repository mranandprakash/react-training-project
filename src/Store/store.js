import {configureStore} from '@reduxjs/toolkit';
import ApplicationReducer from './ApplicationSlice';
import CarSlice from './CarSlice';

const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        cars: CarSlice,
    }
});

export default store;