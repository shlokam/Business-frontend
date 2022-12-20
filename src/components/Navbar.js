import React from "react";
import logo from '../assets/logo.jpeg';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar(){
    return(
        <div className="navbar">
            <div className="leftSide">
                <img src={logo}/>
                <h3>opus</h3>
            </div>
            <div className="rightSide">
                <Link to="/">Overview</Link>
                <Link to="/">Pages</Link>
                <Link to="/">Templates</Link>
                <Button variant="contained" className="btn-contact-us">
                    Contact Us
                </Button>

            </div>
            
        </div>
    )
}

export default Navbar;