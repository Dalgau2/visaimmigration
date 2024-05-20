import { Box, Typography, Button, Paper } from "@mui/material";
import SwiperCardForImmigration from "../../Components/CardComponent/CardForSwiper";
import { useSelector } from "react-redux";
// import data from "../../Components/DataOfImmigration/dataSet.json";
import "./dsection.css";
import VisaCard from "../../Components/CardComponent/ReviewCard/VisaCard";
import AllCategoryButton from "../../Button/AllCategoryButton";
import { useNavigate } from "react-router";
import { useState } from "react";
const ExploarDestination = () => {


  const visaData = useSelector((state) => state.data.data);
  const [filterData, setFilterData] = useState(visaData.slice(0, 10));
  const navigate = useNavigate();
  const handleClickExploreAll = () => {
    navigate("/packages");
  };
  const handelSelect = (category) => {
    let filtered = visaData;
    if (category === "instant") {
      filtered = visaData.filter((item) => item.visa_in_days <= 1);
    } else if (category === "inaweak") {
      filtered = visaData.filter((item) => item.visa_in_days <= 7);
    } else if (category === "inamonth") {
      filtered = visaData.filter((item) => item.visa_in_days >= 30 && item.visa_in_days<=30);
    }
    setFilterData(filtered.slice(0, 10));
  };
  console.log(filterData);
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
        <AllCategoryButton onselectApplication={handelSelect} />
      </Box>
      {/* End Pont of Button section */}
      <Box
        sx={{
          display: {
            xs: "grid",
            sm: "grid",
            md: "grid",
            lg: "grid",
            xl: "grid",
          },
          justifyItems: "center",
          gap: "10px",
          padding: "30px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateColumns: {
            xl: "repeat(7,1fr)",
            lg: "repeat(4,1fr)",
            md: "repeat(4,1fr)",
            sm: "repeat(2,1fr)",
            sx: "repeat(1,1fr)",
            xs: "repeate(1,2fr)",
          },
        }}
      >
        {filterData.map((data, index) => {
          return (
            <Box key={index}>
              <VisaCard data={data} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Button
          sx={{
            color: "black",
            outline: "1px solid black",
            textTransform: "none",
            borderRadius: "20px",
            width: "100px",
            fontWeight: "400",
            "&:hover": { color: "white", outline: "1px solid white" },
          }}
          onClick={handleClickExploreAll}
        >
          Explore all
        </Button>
      </Box>
    </Box>
  );
};
export default ExploarDestination;
