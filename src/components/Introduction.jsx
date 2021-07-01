import React from 'react'
import "./styles/Introduction.scss";
import {Avatar,Typography,Button} from "@material-ui/core";

function Introduction() {
    const scrollTo=(element)=>{
        element.scrollIntoView({behavior:"smooth",block:"start",inline:"start"});
      }
    return (
        <div className="intro" id="intro">
        <Avatar style={{width:150,height:150}}/>
        <div className="description">
        <Typography variant="h4">Hello,</Typography>
        <Typography variant="body1" gutterBottom>
        My name is Michal Platko.<br/>
        I am a web developer located in Presov,Slovakia.<br/>
        And I am React Enthusiast!<br/>
        </Typography>
        <Button variant="contained" color="primary"
        onClick={()=>{scrollTo(document.getElementById("projects"))}}>View my work ↓</Button>
        </div>
        </div>
    )
}

export default Introduction;
