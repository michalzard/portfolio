import React from 'react'
import "./styles/Projects.scss";
import {Typography,Paper,Grid} from "@material-ui/core";

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



function Project(){

    return(
        <Grid item>
        <Paper className="project" elevation={3}>
        <Typography variant="h5">Title</Typography>
        <img src="" alt=""/>
        <Typography variant="caption">description</Typography>
        <div className="techstack">tech icons to display</div>
        <div className="actions">
        buttons
        </div>
        </Paper>
        </Grid>
    )
}

export default WorkDisplay;
