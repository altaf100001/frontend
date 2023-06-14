import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box } from '@mui/system';
import MealOption from './MealOption';
import { useState } from 'react';
import axios from "axios"
import MainSlider from './MainSlider';
import '../../App.css';
import Banner from './Banner';
import Testimonial from './Testimonial';

const Home = () => {

  const [data,setData] = useState([])


 async function GetDishes (){

  try{

const responce = await axios(`https://toneopeats-backend.vercel.app/dishes`)

if(!responce.data.error)
setData(responce.data.data)
  }
 catch(error){

 }
}

useEffect(() => {
  GetDishes()

 
}, [])



console.log(data,"data")



  return (
    <Box>
      <Header/>
     
      <MainSlider data={data} />
      <Banner/>
      <MealOption value={data}/>
      <Testimonial/>
      <Footer/>
    </Box>
  )
}

export default Home