import { Box, Typography, Button, Paper } from "@mui/material";
import SwiperCardForImmigration from "../../Components/CardComponent/CardForSwiper";
import data from "../../Components/DataOfImmigration/dataSet.json";
import "./dsection.css";
const ExploarDestination = () => {
  return (
    <Box className="DestinationContainer">
      {/* Expolation Section  Start */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Cential",
            fontSize: "48px",
            fontWeight: "700",
            paddingTop: {lg:"45px",md:"15px",sm:"20px",xs:"15px"},
            fontSize:{lg:"48px",md:"48px",sm:"30px",xs:"18px"},
            

          }}
        >
          Explore Stays in Trending Destination
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center",alignSelf:"center" }}>
          <Box
            className="searchBarOfHearderSection"
            sx={{ marginTop:{xs:"10px",lg:"0px",md:"0px",sm:"10px"} }}
          >
            <Box
              component={Paper}
              elevation={4}
              sx={{
                width: {lg:"420px",md:"400px",sm:"350px",xs:"300px"},
                height:{lg:"60px",md:"60px",sm:"40px",xs:"35px"},
                borderRadius: "60px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                boxShadow: "101",
                
              }}
            >
              <Button
                variant="contained"
                sx={{
                  marginLeft: "2px",
                  height:{xs:"25px",sm:"28px",md:"35px",lg:"35px"},
                  borderRadius: "40px",
                  backgroundColor: " #FEC916",
                  color: "white",
                  textTransform: "inherit",
                  fontSize:{xs:"10px",sm:"16px",md:"18px",lg:"15px"},
                  // padding:{lg:"0px",md:"10px",sm:"0px",xs:"0px"}
                }}
              >
                All
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height:{xs:"25px",sm:"28px",md:"35px",lg:"35px"},
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  fontSize:{xs:"10px",sm:"16px",md:"18px",lg:"15px"},
                  // padding:{xs:"0px"}
                }}
              >
                Instant
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height:{xs:"25px",sm:"28px",md:"35px",lg:"35px"},
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  fontSize:{xs:"10px",sm:"16px",md:"18px",lg:"15px"},
                  // padding:{xs:"0px"}
                }}
              >
                In a Weak
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height:{xs:"25px",sm:"28px",md:"35px",lg:"35px"},
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  fontSize:{xs:"10px",sm:"16px",md:"18px",lg:"15px"},
                  // padding:{xs:"0px"}
                }}
              >
                In a Month
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* End Pont of Button section */}
      <Box
        sx={{
          display: "grid",
          justifyItems: "center",
          gap: "10px",
          padding: "30px",
          gridTemplateColumns: "repeat(5,1fr)",
          gridTemplateColumns:{lg:"repeat(5,1fr)",md:"repeat(4,1fr)",sm:"repeat(2,1fr)",sx:"repeat(1,fr)"}
          
        }}
      >
        {data.map((d) => {
          return (
            <>
              <SwiperCardForImmigration data={d.id} />
            </>
          );
        })}
      </Box>
    </Box>
  );
};
export default ExploarDestination;
