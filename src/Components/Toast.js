import { Snackbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowToast } from '../Store/ApplicationSlice';

const Toast = ({ message }) => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        dispatch(setShowToast(false));
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
        />
    );
};

export default Toast;