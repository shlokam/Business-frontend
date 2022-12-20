import React from "react";
import '../styles/VideoSection.css';
import VideoElement from "./VideoElement";
import GreyBox from "./GreyBox";

function VideoSection() {
   return(
    <div className="videoSection" >
       
        <div className="box">
            <GreyBox 
                width={70}
                height={70}
            />
        </div>
        <p className="title">VIDEO TITLE</p>
        <h2>Inform Users with video sections</h2>
        <div className="videoElement">
            <VideoElement/>
        </div>
        <div className="boxOne">
            <GreyBox 
                width={100}
                height={100}
            />
        </div>
        <p className="text">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam. 
        </p>
    </div>
   )
}

export default VideoSection;