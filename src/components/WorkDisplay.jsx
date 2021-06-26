import React from 'react'
import "./styles/Projects.scss";
import {Typography,Paper,Grid,Button,Tooltip} from "@material-ui/core";

import Nodejs from "../assets/express.png";
import MongoDB from "../assets/mongodb.png";
import Mui from "../assets/mui.png";
import ReactIcon from "../assets/react.png";
import Sass from "../assets/sass.png";

/**
 * "Lookup table" for icons to display tech stack used in projects
 */
const Icons={
    node:{
        name:"Nodejs",
        icon:Nodejs,
        url:"https://nodejs.org/en/",
    },
    mui:{
        name:"Material-ui",
        icon:Mui,
        url:"https://material-ui.com/",
    },
    react:{
        name:"React",
        icon:ReactIcon,
        url:"https://reactjs.org/",
    },
    sass:{
        name:"Sass",
        icon:Sass,
        url:"https://sass-lang.com/",
    },
    mongodb:{
        name:"Mongodb",
        icon:MongoDB,
        url:"https://www.mongodb.com/",
    }
}


function WorkDisplay() {
    return (
        <div className="projects">
        <Typography variant="h4" gutterBottom>My portfolio</Typography>
        <Grid container justify="center">
        
        <Project
        title="Destiny"
        description="Some random ass description"
        imgURL="https://imgur.com/sss2mgR.png"
        projectURL="https://github.com/michalzard/Destiny"
        iconsArray={[Icons.node,Icons.mongodb,Icons.sass,Icons.mui,Icons.react]}
        />
        
        </Grid>
        </div>
    )
}

/**DESIGN IDEA */

function Project({title,imgURL,description,projectURL,iconsArray}){

    const IconsRender=(array)=>{
        return(
            <>
            {array ? array.map(el=>{
            return (
            <Tooltip key={el.name} placement="top" title={el.name} arrow>
            <a href={el.url} target="_blank" rel="noreferrer">
            <img key={el.name} src={el.icon} alt={el.name}></img>
            </a>
            </Tooltip>
            );
            })
            : null
            }
            </>
        )
    }
    return(
        <Grid item>
        <Paper className="project" elevation={3}>
        <Typography variant="h5" gutterBottom>{title ? title : "Project Title"}</Typography>
        <img src={imgURL ? imgURL : null} alt=""/>
        <Typography variant="caption" className="description">
        {description ? description : "Here's where description is being displayed" }
        </Typography>
        <div className="actions">
        <Button variant="contained" color="primary" target="_blank" 
        href={projectURL ? projectURL : null}>Code</Button>
        </div>
        <div className="techstack">
        <Typography style={{marginRight:"10px"}} variant="body2">Powered by</Typography>
        { iconsArray ? IconsRender(iconsArray) : IconsRender([Icons.react,Icons.mui])}
        </div>
        </Paper>
        </Grid>
    )
}

export default WorkDisplay;
