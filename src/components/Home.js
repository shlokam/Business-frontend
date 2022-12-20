import { Button } from "@mui/material";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import React from "react";
import '../styles/Home.css';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';

function Home(){
    return(
        <div className="home">
            <div className="leftSide">
                <h2 className="heading">Built for enterprise business</h2>
                <p className="description">Opus includes everything 
                you need to build a beautiful website for your business . 
                    Built to perform and look good while doing so.
                </p>
                <div className="btn">
                    <Button variant="contained" className="btn-learnMore" endIcon={<ArrowForwardIcon/>} >
                        Learn More 
                        </Button >
                    <Button variant="contained" className="btn-exploreMore">Explore Pages</Button>
                </div>
            </div>
            <div className="rightSide">
                <div className="container">
                    
                </div>
            </div>
            <div className="middleSide">
                <div className="ceo-image">
                    
                </div>
                
            </div>
            <div className="text">
                {" "}

                    I felt like I couldn't grow until I moved to Opus. Now I am encourgaed to sell more with them.
                    {" "}
                    <h3>Frank Dublin I&quot;</h3>
                    CEO @Stamps
            </div>
            <div className="backSide">

            </div>
            <div className="backSide-grey">
            {/* <i endIcon={<ArrowForwardIcon/>}>SCROLL FOR MORE</i>
               <p startIcon={<ArrowForwardIcon/>} >Scroll For More</p>  */}
               <p><span>
                <MouseOutlinedIcon/>
                </span>
                <span> </span>
               Scroll For More</p>
            </div>
            
        </div>
    )
}

export default Home;