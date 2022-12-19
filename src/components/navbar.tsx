import React from "react";
import Login from "./login";
import { Toolbar, Typography, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';


export default function NavBar({ userName, setUserName }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Toolbar>
                <Button onClick={handleOpen}>
                    {userName ? <Typography><PersonIcon fontSize='medium' sx={{ m: 1, verticalAlign: 'middle' }} />{userName}</Typography> : <Typography>Login</Typography>}
                </Button>
                <Login
                    open={open}
                    login={setUserName}
                    handleClose={handleClose}
                />
            </Toolbar>
        </>
    )
}