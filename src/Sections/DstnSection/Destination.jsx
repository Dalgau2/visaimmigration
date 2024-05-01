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
        <Box
          sx={{
            
            height: { xs: "50px", lg: "80px", md: "90px" },
            display: "flex",
            alignItems: "center",
            paddingTop: {xs:"20px",sm:"20px",md:"29px", lg: "29px" },
          }}
        >
          <Box
            className="searchBarOfHearderSection"
            sx={{
              marginTop: { xs: "10px", lg: "0px", md: "0px", sm: "10px" },

            }}
          >
            <Box
              component={Paper}
              elevation={4}
              sx={{
                width: { lg: "450px", md: "400px", sm: "390px", xs: "300px" },
                height: { lg: "50px", md: "45px", sm: "40px", xs: "35px" },
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
                  marginLeft: { lg: "2px", md: "2px", sm: "5px", xs: "5px" },
                  borderRadius: "40px",
                  backgroundColor: " #FEC916",
                  color: "white",
                  textTransform: "inherit",
                  height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                  fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "20px" },
                  padding: { xs: "5px",md:"7px" },
                  lineHeight: { xs: "15px" },
                  
                }}
              >
                All
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                  fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "20px" },
                  padding: { xs: "5px",md:"7px",sm:"9px" },
                  lineHeight: { xs: "15px" },
                }}
              >
                Instant
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  // width: "80px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                  fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "20px" },
                  padding: { xs: "5px",md:"7px" },
                  lineHeight: { xs: "15px" },
                }}
              >
                In a Weak
              </Button>
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5px",
                  marginRight: { xs: "5px" },
                  // width: "80px",
                  borderRadius: "40px",
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "inherit",
                  height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                  fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "20px" },
                  padding: { xs: "5px",md:"7px" },
                  lineHeight: { xs: "15px" },
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
          display:{xs:"grid",sm:"grid",md:"grid",lg:"grid",xl:"grid"},
          justifyItems:"center",
          gap: "10px",
          padding:"30px",
          gridTemplateColumns: "repeat(5,1fr)",
          gridTemplateColumns: {
            xl: "repeat(7,1fr)",
            lg: "repeat(5,1fr)",
            md: "repeat(4,1fr)",
            sm: "repeat(2,1fr)",
            sx: "repeat(1,1fr)",
            xs:"repeate(1,2fr)"
          },
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
