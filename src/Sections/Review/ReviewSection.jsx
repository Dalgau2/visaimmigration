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
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            color: "white",
            fontSize:{ xs:"40px",lg:"80px"},
            fontFamily: "Alayna",
            fontWeight: "700",
            borderBottom: "10px solid rgb(254, 201, 22);",
            height: {xs:"55px",lg:"95px"},
          }}
        >
          Review & Testimonial
        </Typography>
      </Box>
      <Box sx={{ marginTop: "110px" }}>
        <SwiperOfReviewSection />
      </Box>
      <Box
        sx={{
          height: "335px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
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
