import { Box, Typography } from "@mui/material";
import "../Review/reviewSection.css";
import SwiperOfReviewSection from "../../Components/Swiper/ReviewSwiper/OurReviewSwiper";
import MyRating from "../../Components/Rating/Rating";
import SearchBarForImmigration from "../../Components/ReusebleSearchBar/searchBar";
const OurReviewsSection = () => {
  return (
    <Box className="ourReviews">
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            color: "white",
            fontSize: {xs:"50px",lg:"80px"},
            fontFamily: "Alayna",
            fontWeight: "700",
            borderBottom: {xs:"5px solid rgb(254, 201, 22)",lg:"10px solid rgb(254, 201, 22)"},
            // backgroundColor:"black",
            height: {xs:"60px",lg:"95px"},
            top:70,
            borderRadius:"30px"
          }}
        >
          Review & Testimonial
        </Typography>
      </Box>
      <Box sx={{ marginTop:"110px"}}>
        <SwiperOfReviewSection />
      </Box>
      <Box
        sx={{
          height: { lg: "335px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              sx={{
                fontSize: { lg: "30px" },
                color: "white",
                fontWeight: "700",
              }}
            >
              Rating:
            </Typography>
          </Box>
          <Box>
            <MyRating size={60} />
          </Box>
        </Box>
        <Box>
          <SearchBarForImmigration
            buttonName={"Search"}
            placeHolderName={"Where To Go"}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default OurReviewsSection;
