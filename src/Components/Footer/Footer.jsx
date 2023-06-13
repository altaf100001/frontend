import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
    sx={{
     
      height:"500px"
    }}
    >


<Box
    sx={{
    
      height:"100px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  marginTop:"90px"
    }}
    >
  <img
          style={{
            height: "53px",
            width: "250px",
          }}
          src="https://toneopeats.com/public/img/logo.png?v=1"
          alt="logo"
        />
  
    </Box>



    <Box
    sx={{
    
      height:"160px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around"
    }}
    >

<Box
sx={{
  width:"25%",
  height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18}  fontWeight={600} >Our Address</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14}  fontWeight={500}  >EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib Ganj, Bhopal, Madhya Pradesh 462023</Typography>
</Box>

<Box
sx={{
  width:"25%",
  height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18} fontWeight={600} >Opening Hours</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Mon - Sun 10:00 AM - 11:30 PM</Typography>
</Box>

<Box
sx={{
  width:"25%",
  height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18} fontWeight={600} >Contact Us</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Email: info@toneopeats.com </Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Phone: 7400989898</Typography>
</Box>


  
    </Box>








    <Box
    sx={{
      border:"1px solid pink",
      height:"160px"
    }}
    >

  
    </Box>

  
    </Box>
  )
}

export default Footer