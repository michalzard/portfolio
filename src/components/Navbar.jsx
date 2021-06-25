import React from 'react'
import "./styles/Navbar.scss";
import {AppBar,Button} from "@material-ui/core";

function Navbar() {
    return (
        <AppBar position="sticky">
        <div className="navbar">
        <div>Logo</div>
        <div className="btns">
        <Button variant="text">Home</Button>
        <Button variant="text">About</Button>
        <Button variant="text">Work</Button>
        <Button variant="text">Contact</Button>
        </div>
        </div>
        </AppBar>
    )
}

export default Navbar;
