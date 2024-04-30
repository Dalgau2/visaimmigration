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
import data from "../../../Components/ImmigrationNav/NavOption.json";
import "../../Swiper/ReviewSwiper/reviewStyle.css";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import MyRating from "../../Rating/Rating";
const SwiperOfReviewSection = () => {
  return (
    <Box>
      <Swiper
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={5}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="myReviewSwiper"
      >
        {data.map((d) => {
          return (
            <>
              <SwiperSlide className="mySwiperSlideOfReview">
                {d.id}
              </SwiperSlide>
              <SwiperSlide className="mySwiperSlideOfReview">
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Box p={1} m={2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box>
                        <BiSolidQuoteAltRight
                          style={{ fontSize: "40px", color: "#FDD300" }}
                        />
                      </Box>
                      <CardContent
                        sx={{
                          display: "flex",                     
                          height: "150px",                  
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "juana",
                            fontWeight: "400",
                            fontSize: "22px",
                            color: "black",
                            textAlign: "center",
                          }}
                        >
                          This impressive
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "end",
                        }}
                      >
                        <Box>
                          <BiSolidQuoteAltRight
                            style={{ fontSize: "40px", color: "#FDD300" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Avatar sx={{ width: "50px", height: "50px" }}>
                        helo
                      </Avatar>
                      <Typography sx={{ color: "grey", fontSize: "25px" }}>
                        - Gautam
                      </Typography>
                    </Box>

                    <Box></Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "50px",
                        alignItems: "center",
                      }}
                    >
                      <MyRating size={35} />
                    </Box>
                  </Box>
                </Card>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default SwiperOfReviewSection;
