import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import data from "../../../Components/DataOfImmigration/dataSet.json";
import "../../Swiper/ReviewSwiper/reviewStyle.css";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import MyRating from "../../Rating/Rating";
import ReviewCardOfImmigration from "../../CardComponent/ReviewCard/ReviewCard";
const SwiperOfReviewSection = () => {
  return (
    <Box>
      <Swiper
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        grabCursor={true}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        loop={true}
        // breakpoints

        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween:10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween:10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween:20,
          },
          1024: {
            slidesPerView:1,
            spaceBetween:30,
          },
        }}
        className="myReviewSwiper"
      >
        {data.map((d) => {
          return (
            <>
              <SwiperSlide className="mySwiperSlideOfReview">
                <ReviewCardOfImmigration/>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default SwiperOfReviewSection;
