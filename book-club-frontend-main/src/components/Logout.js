import React from 'react'
import { googleLogout } from '@react-oauth/google';
import { Button } from '@mui/material';

function Logout({setUser}) {
    const onSuccess = () => {
        googleLogout();  // helper for logging out
        setUser(null);
        localStorage.setItem("login", null);  // clearing local storage
        console.log('Logout made successfully');
      };
    return (
        <div style={{height: "50px", paddingTop: "7px"}}>
            <Button variant='danger' style={{ color : "Black", backgroundColor: "White"}} onClick={onSuccess}>Logout</Button>
        </div>
    );
} export default Logout;
