import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
let Background = "https://toneopeats.com/public/img/leaf.webp"

let arr = ["Every dish is prepared in olive oil"
,"No added sugar, color or preservatives"
,"Designed as per calorie requirements",
"Nutrition and portions planned by expert dieticians",
"High protein and low carb food",
"Made with fresh and best quality ingredients",
"Flexibility of plans",
"On-time doorstep delivery"
]



  return (
    <Box sx={{
        // border:'1px solid red',
        // height:740,
        m:"auto",
        width:["90%","90%","80%"],
        mt:10,
    }}>

<Typography fontSize={[30,45,60]} fontWeight={700} color="#0d0d25" variant='h1' >Health & Taste At
<Typography fontSize={[30,45,60]} fontWeight={300} color="#80b53b" variant='h1' >
Your Doorstep</Typography></Typography>

<Box
sx={{
//    margin:"auto",
    width:"100%",
    // border:"2px solid green",
    display:"flex",
    flexDirection:["column-reverse","column-reverse","row"]
}}
>


<Box
sx={{
    // height:560,
    mt:5,
    width:["100%","90%","45%"],
    // border:"2px solid green",
    display:"flex",
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"center"
}}
>
{
    arr.map(el =>(
        <Typography sx={{
            fontWeight: 500,
            fontSize: [13,15,18],
            marginBottom: "25px",
            // backgroundImage: url("https://toneopeats.com/public/img/leaf.webp"),
            backgroundImage: `url(${ Background })`,
            backgroundPosition: "left 4px",
            backgroundSize: "25px",
            backgroundRepeat: "no-repeat",
            paddingLeft: "39px",
          
    
    
        }}  >{el}</Typography>

    ))
}
   

</Box>



<Box
sx={{
    // height:560,
    width:["100%","90%","60%"],
    // border:"2px solid red"
}}
>
    <img  style={{height:560,width:"100%"}} src="https://toneopeats.com/public/img/bannerimg.webp" alt="" />
</Box>



</Box>





        
    </Box>
  )
}

export default Banner