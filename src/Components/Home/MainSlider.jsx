import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Avatar, Box, Container, Typography, useMediaQuery } from "@mui/material";



export default function MainSlider({data}) {
  const isMediumScreen = useMediaQuery("(min-width: 772px)");
  const isCOM2Screen = useMediaQuery("(min-width: 1050px)");
  const isCOM1Screen = useMediaQuery("(min-width: 1250px)");


  return (<>
    {

      isMediumScreen ?
        <Box sx={{ backgroundColor: "rgb(248, 251, 245)" }} >
          <Box sx={{ marginY: "0px", paddingY: "70px" }}>


            <Typography variant="h4" component='h4' sx={{ textAlign: "center", marginBottom: "50px", fontWeight: 700, fontSize: "40px" }}>
              Our
              <Typography variant="body1" component="span" sx={{ textAlign: "center", ml: 1, fontSize: "40px", fontWeight: 700, color: "#80B53B" }} >
                Menu
              </Typography>



            </Typography>




            <Swiper
              slidesPerView={!isCOM2Screen ? 3 : (!isCOM1Screen ? 4 : 5)}
              // spaceBetween={10}
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

                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                      <Avatar alt="Image Alt Text" src={value.img} sx={{ height: "170px", width: "170px" }} />
                      <Typography variant="h6" component="h6" sx={{ fontSize: "16px", fontWeight: "600", display: "block", marginTop: "11px" }}>
                        {value.name}
                      </Typography>
                      <Typography variant="body1" component="p" sx={{ mt: 1, boxShadow: "0px 5px 6px rgb(214 219 210 / 41%)", background: "#fff", fontSize: "13px", borderRadius: "20px", paddingX: "6px" }}>
                        Kcal - {''}

                        <Typography variant="body1" component="span" sx={{ textAlign: "center", fontSize: "13px", color: "#80B53B" }} >
                          {value.kcal}
                        </Typography>


                      </Typography>

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