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
            paddingTop: "10px",
          }}
        >
          Explore Stays in Trending Destination
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            className="searchBarOfHearderSection"
            sx={{ marginBottom: "0px" }}
          >
            <Box
              component={Paper}
              elevation={4}
              sx={{
                width: "420px",
                height: "60px",
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
                  marginLeft: "5px",
                  height: "35px",
                  borderRadius: "40px",
                  backgroundColor: " #FEC916",
                  color: "white",
                  textTransform: "inherit",
                }}
              >
                All
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height: "35px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                }}
              >
                Instant
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height: "35px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                }}
              >
                In a Weak
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  height: "35px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
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
