import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import pic from '../assets/stand.jpeg';
import { Button } from "@mui/material";
import '../styles/Resource.css';

function Resource(){
    return(
        <div className="resource">
            {/* Resource! */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={-5}>
                    <Grid item xs={7}>
                    <h1>Resources</h1>
                    </Grid>
                    <Grid item xs={5}>
                    <Button variant="contained" className="btn">Get started</Button> 
                    </Grid>
                <Grid item xs={4} container direction="column" spacing={0}>
                        <Grid item xs={2}>
                            <img src={pic} height='350px' width='250px'/>
                        </Grid>
                        <Grid item xs={1}>
                        <h4>A high converting,high-peroforming template </h4>
                        </Grid>
                        <Grid item xs={1}>
                           <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.</p>
            <Button variant="contained" className="btn-inside">Read Article</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} container direction="column" spacing={0}>
                        <Grid item xs={2}>
                            <img src={pic} height='350px' width='250px'/>
                        </Grid>
                        <Grid item xs={1}>
                        <h4>With a clean, minimal, professional look</h4>
                        </Grid>
                        <Grid item xs={1}>
                           <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.</p>
            <Button variant="contained" className="btn-inside">Read Article</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} container direction="column" spacing={0}>
                        <Grid item xs={2}>
                            <img src={pic} height='350px' width='250px'/>
                        </Grid>
                        <Grid item xs={1}>
                        <h4>Opus made our journey possible</h4>
                        </Grid>
                        <Grid item xs={1}>
                           <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.</p>
            <Button variant="contained" className="btn-inside">Read Article</Button>
                        </Grid>
                    </Grid>
                    </Grid>
            </Box>
        </div>

    )
}

export default Resource;