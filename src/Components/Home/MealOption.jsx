import React from 'react'
import { Box } from '@mui/system';
import { Container, Typography ,Button} from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const MealOption = () => {
  return (
    <Box
    sx={{
        // border:"1px solid red",
        // height:"500px",
        width:"80%",
        margin:"auto",
        
    }}
    >

<Box
sx={{
    // border:"1px solid blue",
    // height:"298px",
    margin:"auto",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"cenetr",
    flexDirection:["column","column","row"]
}}
>


<Box
sx={{
    // border:"1px solid pink",
    height:"298px",
    width:["100%","80%","50%"],
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
    // border:"1px solid green",
    height:"298px",
    width:["100%","80%","50%"],
    display:"flex",
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"center",
    padding:"24px",
    boxSizing:"border-box"

}}>
    
    <Typography variant='body1' fontSize={22} fontWeight={600} fontColor={"#3a3a3a"} >Select your preference</Typography>
    


    <Box
    sx={{
        width:"100%",
        margin:"auto",
        border:"1px solid #e8eee0",
        height:"80px",
        borderRadius:"10px",
        backgroundColor:"#f8fbf5",
        p:1,
        boxSizing:"border-box"
    }}
    >
        <Typography fontSize={16} fontWeight={600} color="#3a3a3a" >Diet Preference<span style={{color:"red"}} >*</span></Typography>
        <Button  sx={{border:"0.5px solid #e8eee0",mt:1, mr:3,color:"black",fontSize:13,backgroundColor:"white",height:29,width:110}} >Veg</Button>
        <Button sx={{border:"0.5px solid #e8eee0",mt:1, mr:3,color:"black",fontSize:13,backgroundColor:"white",height:29,width:110}}  >Non-Veg</Button>
    </Box>



    <Box
     sx={{
        width:"100%",
        margin:"auto",
        border:"1px solid #e8eee0",
        height:"80px",
        borderRadius:"10px",
        backgroundColor:"#f8fbf5",
        p:1,
        boxSizing:"border-box"
    }}
    >
         <Typography fontSize={16} fontWeight={600} color="#3a3a3a" >Select Meal Time<span style={{color:"red"}} >*</span></Typography>
        <Button  sx={{border:"0.5px solid #e8eee0",mt:1, mr:3,color:"black",fontSize:13,backgroundColor:"white",height:29,width:110}} >Lunch</Button>
        <Button sx={{border:"0.5px solid #e8eee0",mt:1, mr:3,color:"black",fontSize:13,backgroundColor:"white",height:29,width:110}}  >Dinner</Button>
    </Box>



</Box>





</Box>

<BasicTabs/>


        
    </Box>
  )
}

export default MealOption





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: '#8f8f8f' }}>
        <Tabs sx={{ borderColor:"#80b53b"}} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ minWidth: '50%' ,borderColor:"#80b53b"}} label="Item One" {...a11yProps(0)} />
          <Tab sx={{ minWidth: '50%' }} label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}









