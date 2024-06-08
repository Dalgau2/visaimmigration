import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./swiperImmigration.css";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { delay } from "framer-motion";
import SwiperCardForImmigration from "../CardComponent/CardForSwiper";
import { useEffect } from "react";
import VisaCard from "../CardComponent/ReviewCard/VisaCard";
const SwiperImmigration = () => {
  const getData = useSelector((state) => state.data.data);
  return (
    <Box
      className="main-Swiper_Conatiner"
      sx={{ marginTop: "0px", width: "100%" }}
    >
      <Swiper
       
        autoplay={{
          // delay: 1000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 1.5,
         
        }}
        //  pagination={true}
        modules={[ Pagination, Autoplay]}
        loop={true}
        className="mySwiperForImmigration"
      >
        {getData && getData.length >= 0 ? (
          getData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="mySwiperslideForImmigration">
                <VisaCard data={data} />
              </SwiperSlide>
            );
          })
        ) : (
          <h1>loading....</h1>
        )}
      </Swiper>
    </Box>
  );
};
export default SwiperImmigration;
