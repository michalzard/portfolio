import React from 'react'
import "./styles/Navbar.scss";
import {AppBar,Button} from "@material-ui/core";

function Navbar() {
    const scrollTo=(element)=>{
        element.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});
    }
    return (
        <AppBar position="sticky">
        <div className="navbar">
        <div>Logo</div>
        <div className="btns">
        <Button variant="text" onClick={()=>{scrollTo(document.getElementById("intro"))}}>About</Button>
        <Button variant="text" onClick={()=>{scrollTo(document.getElementById("projects"))}}>Work</Button>
        <Button variant="text" onClick={()=>{scrollTo(document.getElementById("contacts"))}}>Contact</Button>
        </div>
        </div>
        </AppBar>
    )
}

export default Navbar;
