import React from "react";
import Box from '@mui/material/Box';

function GreyBox({width,height}){
    return(
        <div>
             <Box
                sx={{
                width: {width},
                height: {height},
                backgroundColor: '#efeff5'
      }}
    />
        </div>
    )
}

export default GreyBox;

