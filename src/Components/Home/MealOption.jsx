import React from 'react'
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';

const MealOption = () => {
  return (
    <Box
    sx={{
        border:"1px solid red",
        height:"500px",
        width:"80%",
        margin:"auto",
        
    }}
    >

<Box
sx={{
    border:"1px solid blue",
    height:"298px",
    width:"100%",
    display:"flex"
}}
>


<Box
sx={{
    border:"1px solid red",
    height:"298px",
    width:"50%",
    backgroundImage: "url(https://toneopeats.com/public/img/subscriptionbg.webp)",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
    
}}
>

    <Typography p={0} m={0} variant='body1' component="span" fontSize={45} color="#ffffff" fontWeight={700} >Subscription</Typography>
    <Typography p={0} mt={-2}  variant='body1' component="span" fontSize={45} color="#95d93c" fontWeight={700}  >Plans</Typography>
</Box>




<Box
sx={{
    border:"1px solid green",
    height:"298px",
    width:"50%"
}}>
    
    <Typography variant='body1' fontSize={22} fontWeight={600} fontColor={"#3a3a3a"} >Select your preference</Typography>
    
    <Box>
        
    </Box>

    <Box>
        
        </Box>

</Box>





</Box>

        
    </Box>
  )
}

export default MealOption