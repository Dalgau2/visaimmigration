import { Box, Typography, Paper, Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const AllCategoryButton = ({onselectApplication}) => {
  
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          height: { xs: "50px", lg: "80px", md: "90px" },
          display: "flex",
          alignItems: "center",
          paddingTop: { xs: "20px", sm: "20px", md: "29px", lg: "29px" },
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
              width: { lg: "400px", md: "390px", sm: "380px", xs: "300px" },
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
              onClick={() => onselectApplication("all")}
              sx={{
                marginLeft: { lg: "2px", md: "2px", sm: "5px", xs: "5px" },
                borderRadius: "40px",
                backgroundColor: " #FEC916",
                color: "white",
                textTransform: "inherit",
                height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "16px" },
                padding: { xs: "5px", md: "7px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography>All</Typography>
            </Button>
            <Button
              onClick={() => onselectApplication("instant")}
              variant="contained"
              sx={{
                marginLeft: "5px",
                // width: "80px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                textTransform: "inherit",
                height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "16px" },
                padding: { xs: "5px", md: "7px", sm: "9px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography> Instant</Typography>
            </Button>
            <Button
              onClick={() => onselectApplication("inaweak")}
              variant="contained"
              sx={{
                marginLeft: "5px",
                // width: "80px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                textTransform: "inherit",
                height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "18px" },
                padding: { xs: "5px", md: "7px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography> In a Weak</Typography>
            </Button>
            <Button
              onClick={() => onselectApplication("inamonth")}
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
                fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "18px" },
                padding: { xs: "5px", md: "7px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography> In a Month</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AllCategoryButton;
