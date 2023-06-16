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

  const [value ,setValue] = useState("")

 async function GetDishes ({value}){

  try{

const responce = await axios.post(`https://toneopeats-backend.vercel.app/dishes`,{
  body :{
    value:value
  }
})

if(!responce.data.error)
setData(responce.data.data)
  }
 catch(error){

 }
}

useEffect(() => {
  GetDishes(value)

 
}, [value])


  return (
    <Box>
      <Header/>
     
      <MainSlider data={data} />
      <Banner/>
      <MealOption setValue={setValue}/>
      <Testimonial/>
      <Footer/>
    </Box>
  )
}

export default Home