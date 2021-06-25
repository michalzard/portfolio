import React from 'react'
import "./styles/Projects.scss";
import {Typography,Paper,Grid,Button} from "@material-ui/core";

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
        <Typography variant="caption" className="description">description : 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <div className="actions">
        <Button variant="contained" color="primary">Code</Button>
        </div>
        <div className="techstack">tech icons to display</div>
        </Paper>
        </Grid>
    )
}

export default WorkDisplay;
