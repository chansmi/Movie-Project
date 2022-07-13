import React from "react";
import { googleLogout } from '@react-oauth/google';
import { Button } from "react-bootstrap";

export default function Logout({ setUser }) {
    const handleLogout = () => {
        googleLogout()
        setUser(null);
        console.log("Logged out successfully.");
    }

    return (
        <div>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
    );
}



//const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

//function Logout({ setUser }) {

//    const onSuccess = () => {
//        googleLogout();  // helper for logging out
//        setUser(null);
//        localStorage.setItem("login", null);  // clearing local storage
//        console.log('Logout made successfully');
//      };
//    }
// <GoogleLogout
// clientId={clientId}
//buttonText="Logout"
//onLogoutSuccess={onSuccess}
//></GoogleLogout>

//export default Logout;