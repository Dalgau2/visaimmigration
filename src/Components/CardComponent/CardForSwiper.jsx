import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import cn from "../../assets/Images/md.webp";
const SwiperCardForImmigration = ({ data }) => {
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
          maxWidth:{xl:"400px",lg:"300px"},
          padding: 1,
          height:"310px",
          borderRadius: "25px",
          backgroundColor: "white",
          height:{xl:"400px",lg:"310px",sm:"310px",md:"310px",xs:"310px"}
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
          <Typography variant="h5" sx={{ fontWeight: "700" }}>
            hello
          </Typography>
          <Typography>
            Get on <span style={{ color: "red" }}>April /10/1999</span>
          </Typography>
          <Box display="flex">
            <span>
              <FlightTakeoffIcon />
            </span>
            <Typography sx={{ paddingRight: "1px" }}>
              4 Direct Flight{" "}
            </Typography>
          </Box>
        </Box>
      </Card>{" "}
      <Box>{data}</Box>
    </Box>
  );
};
export default SwiperCardForImmigration;
