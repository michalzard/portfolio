import React from 'react'
import "./styles/Navbar.scss";
import {AppBar,Button,makeStyles} from "@material-ui/core";

const useStyles=makeStyles(()=>({
    root:{
        backgroundColor:"#212121",
    }
}))

function Navbar() {
    const classes=useStyles();
    return (
        <AppBar position="sticky" classes={{root:classes.root}}>
        <div className="navbar">
        <div>Logo</div>
        <div className="btns">
        <Button variant="text" classes={{root:classes.button}} href="/">Home</Button>
        <Button variant="text" classes={{root:classes.button}} href="about">About</Button>
        <Button variant="text" classes={{root:classes.button}} href="work">Work</Button>
        <Button variant="text" classes={{root:classes.button}} href="contact">Contact</Button>
        </div>
        </div>
        </AppBar>
    )
}

export default Navbar;
