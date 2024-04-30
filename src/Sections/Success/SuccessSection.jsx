import { Box, Typography } from "@mui/material";
import "./styleofSuccess.css";
const OurSuccessSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "50px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <Box className="SuccessHeading" sx={{ width: "50%" }}>
        <Typography
          sx={{ fontSize: "70px", fontWeight: "700", fontFamily: "Poppins" }}
        >
          100% Success Visa From Southeast Asia
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "65px",
            fontWeight: 400,
            color: " rgb(100, 100, 100)",
          }}
        >
          to the World
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "400px" }}>
          Stay updated with travel tips,recommendations, and latest promos.
        </Typography>
      </Box>
      <Box className="successImage"></Box>
    </Box>
  );
};
export default OurSuccessSection;
