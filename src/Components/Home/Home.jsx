import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box } from '@mui/system';
import MealOption from './MealOption';

const Home = () => {
  return (
    <Box>
      <Header/>
      <MealOption/>
      <Footer/>
    </Box>
  )
}

export default Home