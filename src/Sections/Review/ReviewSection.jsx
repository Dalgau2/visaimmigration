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
          height: { lg: "200px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "15%", md: "50%", lg: "50%" },
            color: "white",
            fontSize: { xs: "40px", lg: "80px" },
            fontFamily: "Alayna",
            fontWeight: "700",
            borderBottom: {
              xs: "2px solid rgb(254, 201, 22)",
              sm: "10px solid rgb(254, 201, 22);",
              md: "10px solid rgb(254, 201, 22);",
              lg: "10px solid rgb(254, 201, 22)",
            },
            height: { xs: "48px", lg: "95px" },
          }}
        >
          Review & Testimonial
        </Typography>
      </Box>
      <Box sx={{ marginTop: {xs:"60px",lg:"110px"} }}>
        <SwiperOfReviewSection />
      </Box>
      <Box
        sx={{
          height: {xs:"90px", lg: "335px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
         marginTop:"5px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              sx={{ fontSize: {xs:"12px",lg:"30px"}, color: "white", fontWeight: "700" }}
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
