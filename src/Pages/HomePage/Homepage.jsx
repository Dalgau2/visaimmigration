import { Box, Button, Paper, Typography, Container } from "@mui/material";
import "../HomePage/homepage.css";
import SwiperImmigration from "../../Components/Swiper/swiperForImmigration";
import SearchBarForImmigration from "../../Components/ReusebleSearchBar/searchBar";
import ExploarDestination from "../../Sections/DstnSection/Destination";
import OurAchievements from "../../Sections/Achievment/OurAchievmentSection";
import OurSuccessSection from "../../Sections/Success/SuccessSection";
import OurReviewsSection from "../../Sections/Review/ReviewSection";
import PartnerBrand from "../../Sections/PartnerShip/PartnerShipSection";
import FooterOfImmigration from "../../Sections/Footer/FooterSection";
import ExploarDestinationPage from "../../Sections/DstnSection/DestinationPageTwo";
const HomePageForImmigration = () => {
  return (
    <Box className="immigrationContainer">
      <Box className="heroSection">
        <Box className="headerSection">
          <Box className="headerTitleSection">
            <Box>
              <Typography
                sx={{
                  fontFamily: "juana",
                  fontSize: { xs: "30px", lg: "53px" },
                  fontWeight: 700,
                  padding: { xs: "30px" },
                }}
              >
                Helping you Travel Beyond Boundaries and Borders
              </Typography>
            </Box>
            <Box className="searchBarOfHearderSection">
              {/* SearchBar Component the orignal code is in Searchbar componnet */}
              <SearchBarForImmigration
                buttonName={"Search"}
                placeHolderName={"Where To Go"}
              />
            </Box>
          </Box>
        </Box>
        <Box className="swiperSection" sx={{ marginTop: "0px", width: "100%" }}>
          <SwiperImmigration />
        </Box>
      </Box>
      <Box className="ExplorDestinationSectionOne">
        <ExploarDestinationPage />
      </Box>
      {/* AchivmentSection */}
      <Box sx={{ padding: "40px" }}><OurAchievements /></Box>
      {/* Success Section */}
      <Box><OurSuccessSection /></Box>
      {/* ReviewSection */}
      <Box><OurReviewsSection /></Box>
    </Box>
  );
};
export default HomePageForImmigration;
