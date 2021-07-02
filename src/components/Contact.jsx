import React, { useState } from 'react'
import "./styles/Contact.scss";
import {Typography,Tooltip} from "@material-ui/core";

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
    const [tooltipOpen,SetTooltipOpen]=useState(false);
    const addEmailToClipBoard=()=>{
        if(navigator)navigator.clipboard.writeText("miso.platko@gmail.com");
        SetTooltipOpen(true);
        setTimeout(()=>{SetTooltipOpen(false)},3000);
    }

    return (
        <div className="contacts" id="contacts">
        <div className="social">
        <Typography variant="h3" gutterBottom>Contact</Typography>
        <a href="https://github.com/michalzard/" target="_blank" rel="noreferrer">
        <GitHubIcon/>
        </a>
        <a href="https://twitter.com/michalzard7" target="_blank" rel="noreferrer">
        <TwitterIcon/>
        </a>
        <a href="https://www.facebook.com/michalidesplatkovic/" target="_blank" rel="noreferrer">
        <FacebookIcon/>
        </a>

        <Tooltip placement="top" open={tooltipOpen} arrow title={<Typography variant="body1">Copied to Clipboard</Typography>}> 
         <EmailIcon className="gmail" onClick={()=>{addEmailToClipBoard();}}/>
     
        </Tooltip>
        </div>

        </div>
    )
}

export default Contact;
