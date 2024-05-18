import { Box, Typography, Button, Paper } from "@mui/material";
import SwiperCardForImmigration from "../../Components/CardComponent/CardForSwiper";
import { useSelector } from "react-redux";
// import data from "../../Components/DataOfImmigration/dataSet.json";
import "./dsection.css";
import { Key } from "@mui/icons-material";
import VisaCard from "../../Components/CardComponent/ReviewCard/VisaCard";
import AllCategoryButton from "../../Button/AllCategoryButton";
const ExploarDestination = () => {
  const visaData = useSelector((state) => state.data.data);
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
        <AllCategoryButton />
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
        {visaData.map((data, index) => {
          return (
            <Box key={index}>
              <VisaCard data={data} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default ExploarDestination;
