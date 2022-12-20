import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pic from '../assets/stand.jpeg';

import '../styles/Reviews.css'

function Reviews(){
    return(
        <div className="review">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={10} direction="column">
                    <Grid item xs={4} container direction="row" spacing={-30}>
                        <Grid item xs={6} >
                            <p>FEATURES</p>
                            <h2>You're not just doing business. You are doing life.</h2>
                            <ul>
                                <li>Responsive components</li>
                                <li>Over 50 sections</li>
                                <li>Handcrafted Pages</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} >
                            <img src={pic} height="500px"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} container direction="row" spacing={-30}>
                        <Grid item xs={6}>
                            <img src={pic} height="500px"/>
                        </Grid>
                        <Grid item xs={6}>
                            <p>OUR KNOWLEDGE</p>
                            <h2>A UI kit that's modern and elegant</h2>
                            <p >Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam. </p>
                         </Grid> 
                    </Grid>
                    <Grid item xs={4} container direction="row" spacing={-30}>
                        <Grid item xs={6}>
                            <h2>stamps</h2>
                            <h2>The Opus UI Kit lets you showcase your work in style.It's helped take 
                                our business online.
                            </h2>
                            <h4>ALEXA F.</h4>
                            <p>Designer @STAMPS</p>
                        </Grid>
                        <Grid item xs={6}>
                        <img src={pic} height="500px"/>    
                         </Grid> 
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Reviews;