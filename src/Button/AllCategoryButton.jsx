import { Box, Typography, Paper, Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
const AllCategoryButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (name) => {
    if (name == "all") {
      setSearchParams((params) => {
        params.delete("duration");
        return params;
      });
    } else {
      setSearchParams({ duration: name });
    }
  };

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
              width: { lg: "400px", md: "390px", sm: "380px", xs: "310px" },
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
              onClick={() => handleClick("all")}
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
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "18px", md: "16px", lg: "16px" },
                  width: { xs: "50px" },
                }}
              >
                All
              </Typography>
            </Button>
            <Button
              onClick={() => handleClick("instant")}
              variant="contained"
              sx={{
                marginLeft: "5px",
                // width: "80px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                textTransform: "inherit",
                height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                fontSize: { xs: "8px", sm: "18px", md: "18px", lg: "16px" },
                padding: { xs: "5px", md: "7px", sm: "9px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
                  width: { xs: "70px" },
                }}
              >
                {" "}
                Instant
              </Typography>
            </Button>
            <Button
              onClick={() => handleClick("inaweak")}
              variant="contained"
              sx={{
                marginLeft: "5px",
                // width: "80px",
                borderRadius: "40px",
                backgroundColor: "black",
                color: "white",
                textTransform: "inherit",
                height: { xs: "29px", sm: "28px", md: "35px", lg: "35px" },
                fontSize: { xs: "10px", sm: "18px", md: "18px", lg: "18px" },
                padding: { xs: "5px", md: "7px" },
                lineHeight: { xs: "15px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
                  width: { xs: "70px", sm: "90px" },
                }}
              >
                {" "}
                In a Weak
              </Typography>
            </Button>
            <Button
              onClick={() => handleClick("inamonth")}
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
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
                  width: { xs: "70px", sm: "90px" },
                }}
              >
                {" "}
                In a Month
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AllCategoryButton;
