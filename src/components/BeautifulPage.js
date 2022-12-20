import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import "../styles/BeautifulPage.css";
import NearMeIcon from "@mui/icons-material/NearMe";
import ImageIcon from '@mui/icons-material/Image';

function Beautifulpage() {
  return (
    <div className="page">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} container direction="column">
            <Grid item xs={4}>
              {/* <div className="box">

                            <GreyBox width ={70} height={70} />
                            </div> */}
              <h3>
                <span className="heading-span">
                  <NearMeIcon />
                </span>
                <span> </span>
                Choose your sections
              </h3>
              <p className="leftSide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </Grid>
            {/* <Grid item xs={4} container>
                <Grid item xs={2}>
                <ImageIcon/>
                </Grid>
              <Grid item xs={2}>
              <h3>Add the images and text you need</h3>
              <p className="leftSide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
              </Grid>
            </Grid> */}
            <Grid item xs={4}>
                
              <h3>
                <span className="heading-span"><ImageIcon/></span>
                Add the images and text you need</h3>
              <p className="leftSide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="column">
            <Grid item xs={6}>
              <h1>Create pages using beauiful components</h1>
            </Grid>
            <Grid item xs={1}>
              <p className="rightSide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.{" "}
              </p>
            </Grid>
            {/* <Grid item xs={2}> */}

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" className="btn">
        Learn More
      </Button>
    </div>
  );
}

export default Beautifulpage;
