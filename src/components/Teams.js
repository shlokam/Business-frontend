import React from "react";
import '../styles/Teams.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Teams(){
    return(
        <div className="teams">
           <h1 className="heading"> Trusted and loved by world's best teams</h1>
            <div className="grid">
            <Box sx={{ flexGrow: 1 }}>
                 <Grid  container spacing={20}>
                     <Grid item xs={3}>
                          <p className="brand">wetransfer</p>
                     </Grid>
                     <Grid item xs={3}>
                         <p className="brand">stamps</p>
                    </Grid>
                     <Grid item xs={3}>
                        <p className="brand">
                             manter.
                         </p> 
                     </Grid>
                    <Grid item xs={3}>
                         <p className="brand">

                             Sugarcane
                          </p>
                    </Grid>
                     <Grid item xs={3}>
                            <h4>99.95%</h4>
                             <p className="desc1">Accuracy rate</p>
                              <p className="desc2">in fullfilling orders</p>
                     </Grid>
                     <Grid item xs={3}>
                         <h4>5,000+</h4>
                          <p className="desc1">Ecommerce business</p>
                         <p className="desc2">partner with Opus</p>
                     </Grid>
                      <Grid item xs={3}>
                          <h4>99.96%</h4>
                          <p className="desc1">Of orders ship on time </p>
                         <p className="desc2">within SLA</p>
                     </Grid>
                      <Grid item xs={3}>
                             {/* <h4 className="hash"> # </h4>
                              <h4 className="one">1</h4> */}
                         <h4 className="oneHash"><span>#</span>1</h4>
                        <p className="desc1"> Best Fulfillment Technology</p>
                         <p className="desc2">by AdWeek's Retail Awards</p>
                     </Grid>
                    </Grid>
             </Box>
    </div>
        </div>

    )
}

export default Teams;