import React from "react";

const src = "https://www.youtube.com/watch?v=diIbwA-BAgo";

const VideoElement = () => {
  return (
    <iframe width="1000"
     height="500" 
     src="https://www.youtube.com/embed/diIbwA-BAgo" 
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; 
     autoplay; clipboard-write; 
     encrypted-media; gyroscope; 
     picture-in-picture" 
     allowfullscreen>

     </iframe>
  );
};

export default VideoElement;
