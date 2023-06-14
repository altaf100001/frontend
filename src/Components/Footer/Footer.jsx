import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box
    sx={{
     backgroundColor:"#f8fbf5",
     
      // height:"500px",
      // border:"1px solid red"
     
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
    
      // height:"160px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:["column","column","row"]
    }}
    >

<Box
sx={{
  width:["80%","50%","25%"],
  mt:2
  // height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18}  fontWeight={600} >Our Address</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14}  fontWeight={500}  >EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib Ganj, Bhopal, Madhya Pradesh 462023</Typography>
</Box>

<Box
sx={{
  width:["80%","50%","25%"],mt:2
  // height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18} fontWeight={600} >Opening Hours</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Mon - Sun 10:00 AM - 11:30 PM</Typography>
</Box>

<Box
sx={{
  width:["80%","50%","25%"],mt:2
  // height:"100px",
 
}}
>
<Typography color="#3a3a3a" textAlign={"center"} variant="subtitle1" fontSize={18} fontWeight={600} >Contact Us</Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Email: info@toneopeats.com </Typography>
<Typography color="#212529" textAlign={"center"}  variant="subtitle1" fontSize={14} fontWeight={500}  >Phone: 7400989898</Typography>
</Box>


  
    </Box>








    <Box
    sx={{
      borderTop:"0.5px solid #b5bfa7",
      height:"160px",
      display:"flex",
      alignItems:'center',
      justifyContent:"center",
      flexDirection:"column"
    }}
    >
<Box
sx={{
  display:"flex",
  
}}
>


  <Box
  sx={{
    border:"1px solid #b5bfa7",
    borderRadius:"50%",
    height:40,
    width:40,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "&:hover": {
      backgroundColor: "#80b53b",
      border:"0px ",
    },
    margin:"0px 11px"
  }}
  >
  <InstagramIcon sx={{color:"#b5bfa7",  height:20,width:20,"&:hover": {
    color: "white",
      border:"0px ",
    }, }}   />
  </Box>


 <Box
  sx={{
    border:"1px solid #b5bfa7",
    borderRadius:"50%",
    height:40,
    width:40,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "&:hover": {
      backgroundColor: "#80b53b",
      border:"0px ",
    },
    margin:"0px 11px"
  }}
  >
  <FacebookIcon sx={{color:"#b5bfa7",  height:20,width:20,"&:hover": {
    color: "white",
      border:"0px ",
    }, }}   />
  </Box>


  <Box
  sx={{
    border:"1px solid #b5bfa7",
    borderRadius:"50%",
    height:40,
    width:40,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "&:hover": {
      backgroundColor: "#80b53b",
      border:"0px ",
    },
    margin:"0px 11px"
  }}
  >
  <TwitterIcon sx={{color:"#b5bfa7",  height:20,width:20,"&:hover": {
    color: "white",
      border:"0px ",
    }, }}   />
  </Box>

  <Box
  sx={{
    border:"1px solid #b5bfa7",
    borderRadius:"50%",
    height:40,
    width:40,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "&:hover": {
      backgroundColor: "#80b53b",
      border:"0px ",
    },
    margin:"0px 11px"
  }}
  >
  <YouTubeIcon sx={{color:"#b5bfa7",  height:20,width:20,"&:hover": {
    color: "white",
      border:"0px ",
    }, }}   />
  </Box>

</Box>
  
  <Typography variant="caption" mt={3} fontSize={14} color="#3a3a3a" >© Copyright All rights reserved by TONEOPEATS</Typography>

    </Box>

  




    </Box>
  )
}

export default Footer