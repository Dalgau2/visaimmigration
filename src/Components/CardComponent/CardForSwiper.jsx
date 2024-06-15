import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import cn from "../../assets/Images/md.webp";
import { useEffect } from "react";
const SwiperCardForImmigration = () => {
  useEffect(() => {
    console.log("data");
  }, []);
  return (
    <Box
      sx={{
        padding: 0,
        maxWidth: 320,
        borderRadius: "25px",
      }}
    >
      <Card
        sx={{
          maxWidth: { xl: "400px", lg: "300px" },
          padding: 1,
          height: "310px",
          borderRadius: "25px",
          backgroundColor: "white",
          height: {
            xl: "400px",
            lg: "310px",
            sm: "310px",
            md: "310px",
            xs: "310px",
          },
          // border: "2px solid black",
        }}
      >
        <CardMedia
          component="img"
          // height="150"
          image={cn}
          alt="Paella dish"
          sx={{
            backgroundColor: "white",
            marginRight: "15px",
            borderRadius: "19px",
          }}
        />
        <Box sx={{ marginTop: "5px" }}>
          <Typography sx={{ fontWeight: "700" }}>Ramu</Typography>
          <Typography>
            Get on <span style={{ color: "red" }}>April /10/1999</span>
          </Typography>
          <Box display="flex">
            <span>
              <FlightTakeoffIcon />
            </span>
            <Typography variant="body1" sx={{ paddingRight: "1px" }}>
              4 Direct Flight 
            </Typography>
          </Box>
        </Box>
        <Box
          mt={2}
          sx={{
            borderTop: "2px solid black",
            padding: "0px",
            marginRight: "0px",
          }}
        >
          <Button variant="contained">Start</Button>
        </Box>
      </Card>{" "}
    </Box>
  );
};
export default SwiperCardForImmigration;
