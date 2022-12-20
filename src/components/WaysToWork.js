import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import pic from "../assets/work.jpeg";
import { Button } from "@mui/material";
import "../styles/WaysToWork.css";

function WaysToWork() {
  return (
    <div className="work">
      {/* <h1>Ways to Work with Us.</h1>
            <Button variant="contained" className="btn">Learn More</Button> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={-5}>
          <Grid item xs={7}>
            <h1>Ways to Work with us</h1>
          </Grid>
          <Grid item xs={5}>
            <Button variant="contained" className="btn">
              Get started
            </Button>
          </Grid>
          <Grid item xs={4} container direction="column" spacing={0}>
            <Grid item xs={2}>
              <img src={pic} height="350px" width="250px" />
            </Grid>
            <Grid item xs={1}>
              <h4>Project Management</h4>
            </Grid>
            <Grid item xs={1}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim eniam.
              </p>
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column" spacing={-5}>
            <Grid item xs={2}>
              <img src={pic} height="350px" width="250px" />
            </Grid>
            <Grid item xs={1}>
              <h4>Advanced Analytics</h4>
            </Grid>
            <Grid item xs={1}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column" spacing={0}>
            <Grid item xs={2}>
              <img src={pic} height="350px" width="250px" />
            </Grid>
            <Grid item xs={1}>
              <h4>Marketing & Dashboard</h4>
            </Grid>
            <Grid item xs={1}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default WaysToWork;
