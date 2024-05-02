import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./swiperImmigration.css";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import data from "../DataOfImmigration/dataSet.json";
import imge from "../../assets/Images/homebackground.246fe7ba.png";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { delay } from "framer-motion";
import SwiperCardForImmigration from "../CardComponent/CardForSwiper";
const SwiperImmigration = () => {
  return (
    <Box
      className="main-Swiper_Conatiner"
      sx={{ marginTop: "0px", width: "100%" }}
    >
      <Swiper
        effect={"coverflow"}
         autoplay={{
           delay: 1000,
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
          slideShadows: true,
        }}
        //  pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={true}
        className="mySwiperForImmigration"
      >
        {data.map((d) => {
          return (
            <>
              <SwiperSlide className="mySwiperslideForImmigration">
                <SwiperCardForImmigration />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default SwiperImmigration;
