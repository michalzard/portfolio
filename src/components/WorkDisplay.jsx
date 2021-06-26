import React from 'react'
import "./styles/Projects.scss";
import {Typography,Paper,Grid,Button} from "@material-ui/core";

import Nodejs from "../assets/express.png";
// import Html5 from "../assets/html5.png";
// import Js from "../assets/js.png";
import Mui from "../assets/mui.png";
import ReactIcon from "../assets/react.png";
import Sass from "../assets/sass.png";


function WorkDisplay() {
    return (
        <div className="projects">
        <Typography variant="h4" gutterBottom>My portfolio</Typography>
        <Grid container justify="center">
        <Project/><Project/>
        <Project/><Project/>
        <Project/> <Project/>
        </Grid>
        </div>
    )
}

/**DESIGN IDEA */

function Project(){

    return(
        <Grid item>
        <Paper className="project" elevation={3}>
        <Typography variant="h5">Title</Typography>
        <img src="" alt=""/>
        <Typography variant="caption" className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <div className="actions">
        <Button variant="contained" color="primary">Code</Button>
        <Button variant="contained" color="primary">Readme</Button>
        </div>
        <div className="techstack">
        <Typography style={{marginRight:"10px"}}>Powered by</Typography>
        <img src={Nodejs} alt="express"></img>
        {/* <img src={Html5} alt="express"></img>
        <img src={Js} alt="express"></img> */}
        <img src={Mui} alt="express"></img>
        <img src={ReactIcon} alt="express"></img>
        <img src={Sass} alt="express"></img>
        </div>
        </Paper>
        </Grid>
    )
}

export default WorkDisplay;
