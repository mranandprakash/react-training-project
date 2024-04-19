import {createSlice} from '@reduxjs/toolkit';

const ApplicationSlice = createSlice({
    name: 'application',
    initialState: {
        isLogin: false,
        isLogged: false,
        showToast: false,
    },
    reducers: {
        toggleLogin: (state) => {
            state.isLogin = !state.isLogin;
        },
        setLogged: (state) => {
            state.isLogged = !state.isLogged;
        },
        setShowToast: (state) => {
            state.showToast = !state.showToast;
        },
    },
});

export const {toggleLogin, setLogged, setShowToast} = ApplicationSlice.actions;
export default ApplicationSlice.reducer;