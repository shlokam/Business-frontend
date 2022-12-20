import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { InputOutlined } from "@material-ui/icons";
import { Button, Divider } from "@mui/material";
import '../styles/Footer.css';
import logo from '../assets/logo.jpeg';

function Footer(){
    return(
        <div className="footer">
            <div className="leftSide">
                <img src={logo}/>
                <h3>opus</h3>
            </div>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <ul>
                            <li className="first">OVERVIEW</li>
                            <li>Overview</li>
                            <li>Landings</li>
                            <li>Company</li>
                            <li>Pricing</li>
                            <li>CMS Pages</li>
                            <li>Accounts</li>
                            <li>Buy for Figma</li>

                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul>
                            <li className="first">PAGES</li>
                            <li>Landing 1</li>
                            <li>Landing 2</li>
                            <li>Landing 3</li>
                            <li>Company 1</li>
                            <li>Company 2</li>
                            <li>Company 3</li>
                            <li>Blog 1</li>
                            <li>Blog 2</li>
                            <li>Contact 1</li>
                            <li>Contact 2</li>
                            <li>Contact 3</li>

                        </ul>
                    </Grid>
                    <Grid item xs={2}>
                        <ul>
                            <li className="first">PAGES</li>
                            <li>Case Studios</li>
                            <li>Careers</li>
                            <li>Pricing 1</li>
                            <li>Pricing 2</li>
                            <li>Pricing 3</li>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Forget Password</li>
                            <li>Blog post</li>
                            <li>Team Member</li>
                            <li>Case Study</li>
                            <li>Job Post</li>

                        </ul>
                    </Grid>
                    <Grid item xs={6} container direction="column">

                    <Grid item xs={3} >
                        {/* <input placeholder="Email address"/>
                        <Button variant="contained">Get started</Button> */}
                        <form className="search-wrapper cf">
                            <input type="text" 
                            placeholder="Email Adress"
                            style={{"box-shadow": "none"}}/>
                            <button className="btn" type="submit">Get Started</button>
                        </form>
                    </Grid>

                    <Grid item xs={3} container direction="row">
                       <Grid item xs={3}>
                        <p>OPUS FOR WEBFLOW</p>
                        <h3>LOREM IPSUM</h3>
                       </Grid>

                       <Grid item xs={3}>
                        <p>OPUS FOR FIGMA</p>
                        <h3>LOREM IPSUM</h3>
                       </Grid>
                    </Grid>
                    <Grid item xs={3} >
                        <p>&copy; Template by <span>Lorem</span>- Powdered by <span>Ipsum</span></p>
                    </Grid>
                    </Grid>

                    </Grid>
                    </Box>
                    <Divider/>
                    <p>Style Guide License Changelog</p>
        </div>
    )
}

export default Footer;