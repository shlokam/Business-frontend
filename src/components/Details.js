import React from "react";
import '../styles/Details.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import GreyBox from '../components/GreyBox';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import RocketIcon from '@mui/icons-material/Rocket';

function Details(){
    return(
        <div className="details">
            <div className="greyBox">
            <GreyBox 
             width={70}
             height={70}
             />
             </div>
            <div className="box">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={-20}>
                    <Grid item xs={6}>
                        <h1>Make your site better with Opus</h1>
                         <p className="leftP">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam. </p>
            <Button variant="contained" className="btn">Learn More</Button>
                    </Grid>
                    <Grid item xs={6} spacing={0} container direction="column">

                      <Grid item xs={3} >
                       
                      </Grid>
                      <Grid item xs={4} >
                        {/* <p>
                          <span> <NorthWestIcon/></span>
                          <h4 className="rightSide">Build or customize a website in minutes</h4>
                        </p> */}
                       
                       <h4 className="rightSide">
                       <span> <NorthWestIcon  style={{ color: "blue" }}/></span>
                      <br></br>
                        Build or customize a website in minutes</h4>
                      </Grid>
                      <Grid item xs={4} >
                       <h4 className="rightSide">
                       <span> <RocketIcon  style={{ color: "blue" }}/></span>
                       <br></br>
                        Our UI Kit was made for creativity.</h4>
                      </Grid>
                      <Grid item xs={2} >
                        <div className="greyBoxRight">

                      <GreyBox 
                        width={300}
                        height={400}
                        />
                        </div>
                      </Grid>
                   </Grid>
                </Grid>
            </Box>
           
            </div>

            <div className="greybox-outside" >

<GreyBox 
            width={100}
            height={100}
            />
  </div>
        </div>
    )
}

export default Details;