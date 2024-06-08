import { Box, Typography, Button, Paper } from "@mui/material";
import SwiperCardForImmigration from "../../Components/CardComponent/CardForSwiper";
import { useSelector } from "react-redux";
// import data from "../../Components/DataOfImmigration/dataSet.json";
import "./dsection.css";
import VisaCard from "../../Components/CardComponent/ReviewCard/VisaCard";
import AllCategoryButton from "../../Button/AllCategoryButton";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ExploarDestination from "./Destination";
const ExploarDestinationPage= () => {
  const visaData = useSelector((state) => state.data.data);
  let filtered=visaData
  const handleClickExploreAll = () => {
    
  };
  return (
    <Box className="DestinationContainer">
      {/* Expolation Section  Start */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Cential",
            fontSize: "48px",
            fontWeight: "700",
            paddingTop: { lg: "45px", md: "15px", sm: "25px", xs: "15px" },
            fontSize: {
              lg: "48px",
              md: "48px",
              sm: "48px",
              xs: "28px",
              xl: "130px",
            },
          }}
        >
          Explore Stays in Trending Destination
        </Typography>
      </Box>
     <ExploarDestination/>
    </Box>
  );
};
export default ExploarDestinationPage;
