import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Food from './Food';
import Banner from './Banner';


const MealOption = ({value}) => {

    const [veg, setVeg] = useState(false)
    const [Nveg, setNVeg] = useState(false)
    const [lunch, setlunch] = useState(false)
    const [dinner, setdinner] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        if (!lunch && !dinner) {
            setdinner(true)
        }
        // if (!veg && !Nveg) {
        //     setVeg(true)
        // }

    }, [lunch, dinner, veg, Nveg])


    useEffect(() => {
        let data
        if ((veg && !Nveg) || (!veg && !Nveg)) {
            data = value.filter(v => v.type === "veg")
        } else if (!veg && Nveg) {
            data = value.filter(v => v.type === "nonVeg")
        } else if (veg && Nveg) {
            data = value
        }
        setData(data);


    }, [lunch, dinner, veg, Nveg,value])

    return (
        <Box
            sx={{
                // border:"1px solid red",
                backgroundColor:"white",
                // height:"500px",
           boxShadow:"0px 6px 12px rgb(0 0 0 / 6%)",
                width: "80%",
                margin: "auto",

            }}
        >





            <Box
                sx={{
                    // border:"1px solid blue",
                    // height:"298px",
                   
                    margin: "auto",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "cenetr",
                    flexDirection: ["column", "column", "row"],
                    mt:10,
                }}
            >


                <Box
                    sx={{
                        // border:"1px solid pink",
                        height: "298px",
                        width: ["100%", "80%", "50%"],
                        backgroundImage: "url(https://toneopeats.com/public/img/subscriptionbg.webp)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"

                    }}
                >

                    <Typography p={0} m={0} variant='body1' component="span" fontSize={45} color="#ffffff" fontWeight={700} >Subscription</Typography>
                    <Typography p={0} mt={-2} variant='body1' component="span" fontSize={45} color="#95d93c" fontWeight={700}  >Plans</Typography>
                </Box>




                <Box
                    sx={{
                        // border:"1px solid green",
                        height: "298px",
                        width: ["100%", "80%", "50%"],
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        padding: "24px",
                        boxSizing: "border-box"

                    }}>

                    <Typography variant='body1' fontSize={22} fontWeight={600} fontColor={"#3a3a3a"} >Select your preference</Typography>



                    <Box
                        sx={{
                            width: "100%",
                            margin: "auto",
                            border: "1px solid #e8eee0",
                            height: "80px",
                            borderRadius: "10px",
                            backgroundColor: "#f8fbf5",
                            p: 1,
                            boxSizing: "border-box"
                        }}
                    >
                        <Typography fontSize={16} fontWeight={600} color="#3a3a3a" >Diet Preference<span style={{ color: "red" }} >*</span></Typography>
                        <Button sx={{ border: "0.5px solid #e8eee0", mt: 1, mr: 3, color: `${veg ? "white" : "black"}`, fontSize: 13, backgroundColor: `${veg ? "#80B53B" : "white"}`, height: 29, width: 110, '&:hover': { color: "black" } }} onClick={() => setVeg(!veg)}    >Veg</Button>
                        <Button sx={{ border: "0.5px solid #e8eee0", mt: 1, mr: 3, color: `${Nveg ? "white" : "black"}`, fontSize: 13, backgroundColor: `${Nveg ? "#80B53B" : "white"}`, height: 29, width: 110, '&:hover': { color: "black" } }} onClick={() => setNVeg(!Nveg)}  >Non-Veg</Button>
                    </Box>



                    <Box
                        sx={{
                            width: "100%",
                            margin: "auto",
                            border: "1px solid #e8eee0",
                            height: "80px",
                            borderRadius: "10px",
                            backgroundColor: "#f8fbf5",
                            p: 1,
                            boxSizing: "border-box"
                        }}
                    >
                        <Typography fontSize={16} fontWeight={600} color="#3a3a3a" >Select Meal Time<span style={{ color: "red" }} >*</span></Typography>
                        <Button sx={{ border: "0.5px solid #e8eee0", mt: 1, mr: 3, color: `${lunch ? "white" : "black"}`, fontSize: 13, backgroundColor: `${lunch ? "#80B53B" : "white"}`, height: 29, width: 110, '&:hover': { color: "black" } }} onClick={() => setlunch(!lunch)}>Lunch</Button>
                        <Button sx={{ border: "0.5px solid #e8eee0", mt: 1, mr: 3, color: `${dinner ? "white" : "black"}`, fontSize: 13, backgroundColor: `${dinner ? "#80B53B" : "white"}`, height: 29, width: 110, '&:hover': { color: "black" } }} onClick={() => setdinner(!dinner)} >Dinner</Button>
                    </Box>



                </Box>





            </Box>

       <Box
       sx={{
        mt:2
       }}>
       <BasicTabs lunch={lunch} dinner={dinner} data={data} />
       </Box>

<Box
sx={{
  // border:"1px solid red",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  p:3
}}
>
<Button sx={{backgroundColor:"#e9901b" ,"&:hover" :{backgroundColor:"#e9901b"},h:50,width:230}} variant="contained" >Proceed</Button>
</Box>

        </Box>
    )
}

export default MealOption





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple - tabpanel - ${index}`}
        // aria - labelledby={ `simple - tab - ${ index } `}
        // {...other }
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box >
    );
}

function a11yProps(index) {
    return {
        id: ` simple - tab - ${index}`,
        ariaControls: `simple - tabpanel - ${index}`,
    };
}

export function BasicTabs({ lunch, dinner, data }) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 2, borderColor: '#8f8f8f' }}>
                <Tabs   TabIndicatorProps={{
    style: {
      backgroundColor: "#80b53b",
      color:"#80b53b",
      textColor:"#80b53b",
    
    },
}} textColor="dark"
inkBarStyle={{background: 'red'}} sx={{ borderColor: "#80b53b" }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        lunch ? (

                            <Tab fontSize={25} sx={{ minWidth: `${dinner ? "50%" : "100%"}`,fontSize:25, borderColor: "#80b53b",textTransform:"capitalize",fontWeight:600 }} label="Lunch Packages" />
                        ) : null
                    }
                    {
                        dinner ? (


                            <Tab sx={{ minWidth: `${lunch ? "50%" : "100%"}`,fontSize:25, borderColor: "#80b53b",textTransform:"capitalize",fontWeight:600 }} label="Dinner Packages" />
                        )
                            : null


                    }

                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>

                <Food value={data} />


            </TabPanel>

            <TabPanel value={value} index={1}>
                <Food value={data} />

            </TabPanel>

        </Box>
    );
}