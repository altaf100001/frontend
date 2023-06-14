import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Avatar, Box, Container, Typography, useMediaQuery } from "@mui/material";
let data = [


    {
        img: 'https://toneopeats.com/public/img/User%202.png',
        desc: "Ankit's healthy smile says it all! With ToneOpEats, he's not only enjoying delicious and premium meals, but also feeling great about his overall health.",
        name: 'Rohit Sing Rajput',

    },

    {
        img: 'https://toneopeats.com/public/img/User%201.png',
        desc: " Their delicious and nutritious meals make it easy to avoid junk food. With their exceptional quality, timely delivery, and wide variety of options, ToneOpEats is my go-to choice for healthy eating.",
        name: "Suchita Sharma",

    }


];
const Testimonial = () => {

    const isMediumScreen = useMediaQuery("(min-width: 772px)");
    const isCOM2Screen = useMediaQuery("(min-width: 1050px)");
    const isCOM1Screen = useMediaQuery("(min-width: 1250px)");


    return (<>
        {

            isMediumScreen ?
                <Box sx={{ backgroundColor: "rgb(248, 251, 245)" }} >
                    <Box sx={{ marginY: "60px", paddingY: "70px" }}>


                        <Typography variant="h4" component='h4' sx={{ textAlign: "center", marginBottom: "50px", fontWeight: 700, fontSize: "40px" }}>
                            Testimonial
                            <Typography variant="body1" component="span" sx={{ textAlign: "center", ml: 1, fontSize: "40px", fontWeight: 700, color: "#80B53B" }} >
                                #healthysmiles
                            </Typography>



                        </Typography>




                        <Swiper
                            slidesPerView={!isCOM2Screen ? 1 : (!isCOM1Screen ? 2 : 3)}
                            spaceBetween={40}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >

                            {
                                data.map(value => (



                                    <SwiperSlide >

                                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                                            <Avatar alt="Image Alt Text" src={value.img} sx={{ height: "250px", width: "250px" }} />
                                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <Typography variant="h6" component="h6" sx={{ width: "90%", fontSize: "16px", fontWeight: "300", display: "block", marginTop: "20px", ml: 2 }}>
                                                    {value.desc}
                                                </Typography>
                                                <Typography variant="body1" component="p" sx={{ mt: 5, fontSize: 18, fontWeight: 700 }}>


                                                    {value.name}


                                                </Typography>
                                            </Box>
                                        </Box>


                                    </SwiperSlide>


                                ))

                            }


                        </Swiper>
                    </Box>
                </Box>
                : ""
        }
    </>
    );

}

export default Testimonial