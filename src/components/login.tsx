import React from "react";
import { Modal, Button, Box, Typography, TextField } from '@mui/material';
import PropTypes from 'prop-types';

//modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Login({ login, handleClose, open }) {

    const [userTempName, setTempUserName] = React.useState("");

    const updateUsername = (event) => {
        setTempUserName(event.target.value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Please Login
                </Typography>
                <Box
                    noValidate
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Enter Username"
                        variant="outlined"
                        onChange={updateUsername}
                    />
                </Box>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                        login(userTempName)
                        console.log(userTempName);
                        handleClose();
                    }}
                >
                    Login
                </Button>
            </Box>
        </Modal>
    )
}

Login.propTypes = {
    login: PropTypes.func,
    handleClose: PropTypes.func,
    open: PropTypes.bool
};